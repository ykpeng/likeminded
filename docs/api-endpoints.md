# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Profiles

- `GET /api/profiles`
  - Profiles index/filter
  - accepts pagination params (if I get there)
- `GET /api/profiles/:id`
- `PATCH /api/profiles/:id`
- `DELETE /api/profiles/:id`
- `GET /api/profiles/:id/questions`

### Conversations

- `GET /api/conversations`
- `GET /api/conversations/:id`
- `POST /api/conversations/:id/messages`
