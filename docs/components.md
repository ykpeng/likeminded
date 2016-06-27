## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * **LoginPage** (if logged out)
  * Header (if logged in)
    * Filter
  * **ProfilesIndex** (IndexRoute)
    * ProfileIndexItem
  * **Profile**
    * ProfileDetail
    * PersonalityChart
    * ProfileDescription
    * ProfileForm
    * PersonalityTest
  * **ConversationsIndex**
    * ConversationIndexItem
    * **MessagesIndex**
      * MessageIndexItem
      * MessageForm


## Routes

* **component:** `App` **path:** `/`
  * **component:** `LoginPage` **path:** `/`
  * **component:** `ProfilesIndex` **path:** `profiles`
  * **component:** `Profile` **path:**  `profiles/:profileId`
    * **component:** `ProfileForm` **path:** `profiles/:profileId/edit`
    * **component:** `PersonalityTest` **path:** `profiles/:profileId/questions`
  * **component:** `ConversationsIndex` **path:** `conversations`
    * **component:** `ConversationIndexItems` **path:** `conversations/:conversationId`
    * **component:** `MessagesIndex` **path:** `conversations/:conversationId/messages`
