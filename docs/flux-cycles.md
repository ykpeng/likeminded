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

### Profiles API Request Actions

* `fetchAllProfiles`
  0. invoked from `ProfilesIndex` `didMount` and `Navbar` browse matches button `onClick`
  0. `GET /api/profiles` is called.
  0. `receiveAllProfiles` is set as the callback.

* `fetchSingleProfile`
  0. invoked from `ProfileIndexItem` `onClick`
  0. `GET /api/profiles/:id` is called.
  0. `receiveSingleProfile` is set as the callback.

* `updateProfile`
  0. invoked from `ProfileForm` `onSubmit` and `PersonalityTest` `onSubmit`
  0. `PATCH /api/profiles/:id` is called.
  0. `receiveSingleProfile` is set as the callback.

* `destroyProfile` (Bonus)
  0. invoked from delete account button `onClick`
  0. `DELETE /api/profiles/:id` is called.
  0. `removeProfile` is set as the callback.

### Profiles API Response Actions

* `receiveAllProfiles`
  0. invoked from an API callback.
  0. `Profile` store updates `_profiles` and emits change.

* `receiveSingleProfile`
  0. invoked from an API callback.
  0. `Profile` store updates `_profiles[id]` and emits change.

* `removeProfile` (Bonus)
  0. invoked from an API callback.
  0. `Profile` store removes `_profiles[id]` and emits change.

### Store Listeners

* `ProfilesIndex` component listens to `Profile` store.
* `ProfileDetail` component listens to `Profile` store.
* `PersonalityChart` component listens to `Profile` store.
* `ProfileDescription` component listens to `Profile` store.

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
