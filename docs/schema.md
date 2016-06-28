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
country         | string    | not null
zipcode         | integer   | not null
birthday        | date      | not null
img_url         | string    |

## looking_fors
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
type            | string    | not null, limited to: ["friend", "collaborator", "mentor", "mentee"]

## looking_for_joins
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary
looking_for_id  | integer   | not null, foreign key
user_id         | integer   | not null, foreign key

## profile_sections
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign_key, unique [section, user_id]
section         | string    | not null, limit to: ["self summary", "doing with life", "good at", "favorites", "friday night", "message if"]
content         | text      |

## dimensions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
content         | string    | not null, unique

## questions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
content         | string    | not null
dimension_id    | integer   | not null, foreign key

## answer_choices
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
question_id     | integer   | not null, foreign key
content         | string    | not null

## answers
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
answer_choice_id| integer   | not null, foreign key
user_id         | integer   | not null, foreign key

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
