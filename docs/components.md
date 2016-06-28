## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * **LoginPage** (if logged out)
    * LoginForm
    * SignupForm
  * Navbar (if logged in)
    * Filter
  * **UsersIndex** (IndexRoute)
    * UserIndexItem
  * **User**  
    * UserDetail
    * PersonalityChart
    * **UserDescription**
    * **UserForm**
  * **PersonalityTest**
  * **ConversationsIndex**
    * ConversationIndexItem
  * **MessagesIndex**
    * MessageIndexItem
    * MessageForm


## Routes

* **component:** `App` **path:** `/`
  * **component:** `LoginPage` **path:** `IndexRoute`
  * **component:** `UsersIndex` **path:** `users`
  * **component:** `User` **path:**  `users/:userId`
    * **component:** `UserDescription` **path** `IndexRoute`
    * **component:** `UserForm` **path:** `users/:userId/edit`
  * **component:** `PersonalityTest` **path:** `answers`
  * **component:** `ConversationsIndex` **path:** `conversations`
  * **component:** `MessagesIndex` **path:** `conversations/:conversationId`
