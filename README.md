# LikeMinded

[Heroku link][heroku]
[heroku]: http://simpatico.herokuapp.com

## Minimum Viable Product

LikeMinded is a web application inspired by OKCupid that will be build using Ruby on Rails and React.js. The app will help people find friends and collaborators using established psychometric tests. By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](docs/production_readme.md) -- you'll write this later)
- [ ] Browse and search other users by location and ‘looking for’
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Messaging
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Personality questions
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Match percentage based on question answers
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days, W1 W 6pm)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] jBuilder views for Users
- [ ] hosted on Heroku

### Phase 2: ProfileSections, LookingFor/LookingForJoins Models, CRUD API for Profile Sections (1 days, W1 Thu 6pm)

**Objective:** Profiles can be read and updated through the API.

- [ ] create `ProfileSections`, `LookingFor`, and `LookingForJoins` models
- [ ] write `User` model method to filter matches based on `LookingFor`
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for `ProfileSections` (`ProfilesSectionsController`)

### Phase 3: Flux Architecture and Router (1.5 days, W2 M 12pm)

**Objective:** Profiles can be created, read, and edited wth the user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each profile component, building out the flux loop as needed.
  - [ ] `ProfilesIndex`
  - [ ] `ProfileIndexItem`
  - [ ] `ProfileForm`
  - [ ] `ProfileDescription`

### Phase 4: Start Styling (0.5 days, W2 M 6pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles
- [ ] build and style `Navbar`

### Phase 5: PersonalityTest (1.5 day, W2 Thu 12pm)
**Objective:** Implement personality test

- [ ] create `Dimensions`, `Questions`, `AnswerChoices`, and `Answers` Models
- [ ] create `Answers` controller
- seed database with Questions and AnswerChoices
- [ ] write `User` model methods for calculating % matches and showing sorted users

### Phase 6: Conversations (1.5 day, W2 F 6pm)

**Objective:** Users can view conversations they're a part of.

- [ ] create `Conversation` and `Message` models
- build out API, Flux loop, and components for:
  - [ ] `ConversationsIndex`
  - [ ] `ConversationIndexItem`
  - [ ] Users can only view conversations they're a part of
- build out API, Flux loop, and components for:
  - [ ] `MessagesIndex`
  - [ ] `MessageIndexItems`
  - [ ] `MessageForm`
- [ ] Style new elements

### Phase 8: Styling Cleanup and Seeding (1 day, W2 F 6pm)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Filter by location
- [ ] Allow bookmarking of other users
- [ ] Add more user fields (gender, education, languages, smoking/drugs, offspring, pets, etc.)
- [ ] Filter by new fields
- [ ] Pagination / infinite scroll for ProfilesIndex
- [ ] Block users
- [ ] Disable/delete account
- [ ] Multiple sessions

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
