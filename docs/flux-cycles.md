# Flux Cycles

<!-- Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do. -->


## Note Cycles

### Users API Request Actions

* `fetchAllUsers`
  0. invoked from `UsersIndex` `didMount` and `Navbar` browse matches button `onClick`
  0. `GET /api/users` is called.
  0. `receiveAllUsers` is set as the callback.

* `fetchSingleUser`
  0. invoked from `UserIndexItem` `onClick`
  0. `GET /api/users/:id` is called.
  0. `receiveSingleUser` is set as the callback.

* `updateUser`
  0. invoked from `UserForm` `onSubmit` and `PersonalityTest` `onSubmit`
  0. `PATCH /api/users/:id` is called.
  0. `receiveSingleUser` is set as the callback.

* `destroyUser` (Bonus)
  0. invoked from delete account button `onClick`
  0. `DELETE /api/users/:id` is called.
  0. `removeUser` is set as the callback.

### Users API Response Actions

* `receiveAllUsers`
  0. invoked from an API callback.
  0. `User` store updates `_users` and emits change.

* `receiveSingleUser`
  0. invoked from an API callback.
  0. `User` store updates `_users[id]` and emits change.

* `removeUser` (Bonus)
  0. invoked from an API callback.
  0. `User` store removes `_users[id]` and emits change.

### Store Listeners

* `UsersIndex` component listens to `User` store.
* `UserDetail` component listens to `User` store.
* `PersonalityChart` component listens to `User` store.
* `UserDescription` component listens to `User` store.

## Conversations Cycles

### Conversations API Request Actions

* `fetchAllConversations`
  0. invoked from `Navbar` messages button `onClick`
  0. `GET /api/conversations` is called
  0. `receiveAllConversations` is set as the callback.

* `fetchSingleConversations`
  0. invoked from `ConversationIndexItem` `onClick`
  0. `GET /api/conversations/:id` is called
  0. `receiveSingleConversations` is set as the callback.

### Conversations API Response Actions
* `receiveAllConversations`
  0. invoked from an API callback.
  0. `Conversation` store updates `_conversations` and emits change.

* `receiveSingleConversation`
  0. invoked from an API callback.
  0. `Conversation` store updates `_conversations[id]` and emits change.

### Store Listeners
* `ConversationsIndex` component listens to `Conversation` store.
* `ConversationIndexItem` component listens to `Conversation` store.

## Messages Cycles

### Messages API Request Actions

* `fetchAllMessages`
  0. invoked from `MessagesIndex` `didMount` and `ConversationIndexItem` `onClick`
  0. `GET /api/conversations/:id` is called.
  0. `receiveAllMessages` is set as the callback.

* `createMessage`
  0. invoked from `MessageForm` send button `onClick`
  0. `POST /api/conversation/:id/messages` is called.
  0. `receiveSingleMessage` is set as the callback.

### Messages API Response Actions

* `receiveAllMessages`
  0. invoked from an API callback.
  0. `Message` store updates `_message` and emits change.

* `receiveSingleMessage`
  0. invoked from an API callback.
  0. `Message` store updates `_message[id]` and emits change.

### Store Listeners

* `MessagesIndex` component listens to `Message` store.
* `MessageIndexItem` component listens to `Message` store.
