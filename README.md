# LikeMinded

[LikeMinded live][heroku] **NB:** This should be a link to your production site

[heroku]: https://simpatico.herokuapp.com/

LikeMinded is a full-stack web application that helps people find friends and collaborators using a personality test. It uses Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.  

## Features & Implementation

### Profiles

  Upon sign in, user information is stored in the `users` table in the database. Users can edit the essay questions on their profile. These essays are saved in a separate `profile_sections` table with an `user_id` column pointing the user they belong to. On the frontend, users are stored in a `UserStore`.
  ![userShow]

### Matching by personality

  Users complete a personality test to access their scores on six personality dimensions and determine their percentage match to other users. The `dimensions` table in the backend holds `id` and `name`, the `questions` table holds `content` and `dimension_id`, the `answers` table holds `user_id`, `question_id`, and `answer_choice`. On the frontend, `QuestionStore` holds all the questions fetched from the backend. `QuestionIndex` iterates through all the questions and passes each one to `QuestionIndexItem`. Answers are held in `AnswerStore` and displayed in `AnswerIndex`, which passes individual answers as props to `AnswerIndexItem`.

  Percentage matches of the current user against all other users are calculated in the `UsersController` and send to `UserStore`, which sorts the users in order of decreasing percentage match.
  ![questions]

### Filtering

  In the `onSubmit` handler of the submit button of the sign-up form, an AJAX request is made to the Google Maps API to fetch the `city`, `state`, `lat`, and `lng` of the user based on the zipcode they entered. The geographic information is send along with the rest of the form data as params to the `UsersController`. This allows for displaying the users' location and filtering by location. The latitude and longitude coordinates are stored in the `users` table so that distance calculations can be made in the backend, without further AJAX calls.

  The `Search` component holds `Filters` and `UserIndex` as subcomponents. `Filters` calls `FilterActions` methods to update `filterParams` upon user input. The `Search` component listens to the `UserStore` and `FilterParamsStore` and passes `users` and `filterParams` as props to `UserIndex` and `Filters`, respectively, so that the search page live updates as users change their filter inputs.
  In the backend, the `UsersController` checks for `maxAge`, `minAge`, `maxDistance`, and `lookingFor` params to determine which users to return.

![userIndex]

### Messaging

  The `conversations` table holds `id`. The `messages` table hold `conversation_id`, `sender_id`, `receiver_id`, and `content`. `ConversationController` sends all the conversations of the current user along with the last message in the conversation, and its associated users' information, to the frontend, which are held in `ConversationStore`. `ConversationIndex` listens to `ConversationStore` and passes individual conversations to `ConversationIndexItem`, which displays each conversation.

  ![conversationIndex]

  Clicking on a conversation leads to the display of `MessageIndex`, which listens to `MessageStore`. `MessageStore` holds messages that belong to the given conversation, fetched from the `MessagesController`. `MessageIndex` has `MessageIndexItem`s as subcomponents and `MessageForm`, which allows users to add new messages to the conversation.

  ![messageIndex]

  Users can start new conversations by clicking on the "message" button on a match's profile. This leads to the display of a `MessageNewForm` component inside a modal.

  ![messaging]

  On submission of the new message, the message attributes are send to the `ConversationsController`, which creates a new conversation along with a new message. The `ConversationModel` is set up to accept nested attributes.

```ruby
class Conversation < ActiveRecord::Base
  has_many :messages, dependent: :destroy, inverse_of: :conversation
  accepts_nested_attributes_for :messages
end

class Message < ActiveRecord::Base
  validates :content, :sender_id, :receiver_id, presence: true
  validates :conversation, presence: true
end

class Api::ConversationsController < ApplicationController
  def create
    @conversation = Conversation.new(conversation_params)
    if @conversation.save
      render 'api/conversations/show'
    else
      render json: @conversation.errors, status: 422
    end
  end

  def conversation_params
    params.require(:conversation).permit(messages_attributes: [:sender_id, :receiver_id, :content])
  end
end
  ```

## Future Directions for the Project

- [ ] Allow users to bookmark other users
- [ ] Add more user fields (gender, education, languages, smoking/drugs, offspring, pets, etc.)
- [ ] Filter by new fields
- [ ] Pagination / infinite scroll for ProfilesIndex
- [ ] Block users
- [ ] Disable/delete account
- [ ] Multiple sessions

[userIndex]: ./docs/screenshots/userIndex.png
[userShow]: ./docs/screenshots/userShow.png
[messaging]: ./docs/screenshots/messaging.png
[conversationIndex]: ./docs/screenshots/conversationIndex.png
[messageIndex]: ./docs/screenshots/messageIndex.png
[questions]: ./docs/screenshots/questions.png
