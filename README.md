# Daad News – Flask API + React Client
A two-part news aggregator: Flask serves a JSON API backed by NewsAPI, and a React (Vite) frontend consumes it. The UI uses React Bootstrap, supports category tabs, free text search, loading/error states, and graceful empty results.

## Stack
- Backend: Flask, python-dotenv, requests
- Frontend: React, Vite, React Bootstrap, axios, React Router
- API: NewsAPI (v2 everything endpoint)

## Requirements
- Python 3.10+
- Node 18+ and npm
- NewsAPI key (free tier works)

## Backend setup (Flask API)
```bash
cd backend
python -m venv .venv
source .venv/bin/activate           # Windows: .venv\Scripts\activate
pip install -r requirements.txt

# create backend/.env
cat > .env <<'EOF'
NEWS_API_KEY=YOUR_NEWS_API_KEY
FLASK_SECRET=replace_me
EOF

# run the API (default http://localhost:5000)
flask --app app run --reload
# or: python app.py
```

## Frontend setup (React/Vite)
```bash
cd frontend
npm install

# optional: point to a non-default API origin
cat > .env <<'EOF'
VITE_API_BASE=http://localhost:5000
EOF

npm run dev   # starts Vite dev server (default http://localhost:5173)
```

## How it works
- Endpoint: GET /api/news?query=latest
- Parameters: `query` string (default "latest")
- Success response: `{ articles: [...], query: "latest" }`
- Error response (missing key, upstream error): `{ error: "...", articles: [], query: "latest" }` with HTTP 500
- CORS: `Access-Control-Allow-Origin: *` on API responses for local dev

## Run the full app
1) Start the Flask API (backend instructions above).  
2) Start the React dev server (frontend instructions above).  
3) Open the frontend URL (e.g., http://localhost:5173). It calls the Flask API at `VITE_API_BASE` or defaults to http://localhost:5000.

## Project structure
- backend/app.py — Flask API exposing /api/news
- frontend/ — Vite + React UI (components in src/components)

## Notes
- If you see "NEWS_API_KEY is not set" in the UI, add the key to backend/.env and restart the API.
- The frontend fetches on load and whenever you pick a category or submit a search.
