# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
saved_user_id   | integer   | foreign_key (references users), indexed

## profile_details
column name     | data type | details
----------------|-----------|-----------------------
country         | string    | not null
zipcode         | integer   | not null
birthday        | date      | not null
looking_for     | string    | not null, limited to: ["friend", "collaborator", "mentor", "mentee"]
img_url         | string    |


## profile_sections
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign_key, unique
section         | string    | not null, limit to: ["self summary", "doing with life", "good at", "favorites", "friday night", "message if"]
content         | text      |

## questions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
content         | string    | not null

## choices
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
question_id     | integer   | not null, foreign key
content         | string    | not null

## answers
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
question_id     | integer   | not null, foreign key
choice_id       | integer   | not null, foreign key

## conversations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key

## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
conversation_id | integer | not null, foreign key
content     | text      | not null
sender_id   | integer   | not null, foreign key (references users)
receiver_id   | integer   | not null, foreign key (references users)
