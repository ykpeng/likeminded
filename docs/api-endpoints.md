# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `GET /api/users`
  - Profiles index/filter
  - accepts pagination params (if I get there)
- `GET /api/users/:id`
- `PATCH /api/users/:id`
- `DELETE /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Personality Test Answers

- `PATCH /api/answers`
- `POST /api/answers`

### Conversations

- `GET /api/conversations`
- `GET /api/conversations/:id`
- `POST /api/conversations/:id/messages`
