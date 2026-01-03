# 📰 Daad News – Modern News Aggregator

A full-stack news aggregator application that brings you the latest news from around the world. Built with a Flask backend API and a sleek React frontend, this project demonstrates modern web development practices with a clean separation between server and client.

## ✨ Features

- **Real-time News Feed** – Get the latest articles from various sources worldwide
- **Smart Search** – Search for news on any topic that interests you
- **Category Navigation** – Quick access to popular categories like Latest, US, Pakistan, Technology, and more
- **Responsive Design** – Beautiful UI that works seamlessly on desktop, tablet, and mobile devices
- **Fast & Modern** – Built with Vite for lightning-fast development and React for a smooth user experience
- **Error Handling** – Graceful error messages and loading states for a polished experience

## 🛠️ Tech Stack

**Backend:**
- Flask – Lightweight Python web framework
- NewsAPI – Fetching real-time news articles
- python-dotenv – Environment variable management
- requests – HTTP library for API calls

**Frontend:**
- React 19 – Modern UI library
- Vite – Next-generation frontend tooling
- React Bootstrap – Responsive component library
- Axios – Promise-based HTTP client
- React Router – Client-side routing

## 📋 Prerequisites

Before you begin, make sure you have the following installed:
- Python 3.10 or higher
- Node.js 18 or higher and npm
- A free NewsAPI key ([Get one here](https://newsapi.org/))

## 🚀 Getting Started

### Step 1: Clone the Repository

```bash
git clone <your-repository-url>
cd flask_news
```

### Step 2: Set Up the Backend (Flask API)

1. **Navigate to the backend folder:**
   ```bash
   cd backend
   ```

2. **Create and activate a virtual environment:**
   ```bash
   python -m venv .venv
   source .venv/bin/activate
   ```
   > **Note:** On Windows, use `.venv\Scripts\activate` instead

3. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure your environment variables:**
   
   Create a file named `.env` in the `backend` folder and add your API credentials:
   ```env
   NEWS_API_KEY=your_actual_api_key_here
   FLASK_SECRET=your_secret_key_here
   ```
   
   > **Tip:** Get your free NewsAPI key at [https://newsapi.org/register](https://newsapi.org/register)

5. **Start the Flask server:**
   ```bash
   flask --app app run --reload
   ```
   
   Your API will be running at `http://localhost:5000` 🎉
   
   > **Alternative:** You can also run `python app.py`

### Step 3: Set Up the Frontend (React App)

1. **Open a new terminal and navigate to the frontend folder:**
   ```bash
   cd frontend
   ```

2. **Install Node dependencies:**
   ```bash
   npm install
   ```

3. **Configure the API endpoint (Optional):**
   
   If your Flask API is running on a different port or host, create a `.env` file in the `frontend` folder:
   ```env
   VITE_API_BASE=http://localhost:5000
   ```
   
   > **Note:** By default, the frontend expects the API at `http://localhost:5000`

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   Your React app will be running at `http://localhost:5173` 🚀

### Step 4: Access the Application

Open your browser and visit `http://localhost:5173` to start browsing news!

The React frontend will communicate with your Flask backend to fetch and display the latest articles.

## 📁 Project Structure

```
flask_news/
├── backend/
│   ├── app.py              # Flask API with /api/news endpoint
│   ├── requirements.txt    # Python dependencies
│   └── .env               # Environment variables (create this)
│
└── frontend/
    ├── src/
    │   ├── App.jsx        # Main React component
    │   ├── components/    # Reusable UI components
    │   │   ├── NavBar.jsx
    │   │   ├── ArticleCard.jsx
    │   │   └── Footer.jsx
    │   └── main.jsx       # React entry point
    ├── package.json       # Node dependencies
    └── .env              # Frontend env vars (optional)
```

## 🔌 API Documentation

### Endpoint: `GET /api/news`

**Query Parameters:**
- `query` (optional) – Search term or category. Default: `"latest"`

**Success Response:**
```json
{
  "articles": [
    {
      "title": "Article Title",
      "description": "Article description...",
      "url": "https://...",
      "urlToImage": "https://...",
      "source": { "name": "Source Name" },
      "publishedAt": "2026-01-04T10:00:00Z"
    }
  ],
  "query": "latest"
}
```

**Error Response:**
```json
{
  "error": "Error message here",
  "articles": [],
  "query": "latest"
}
```

> **CORS:** The API includes `Access-Control-Allow-Origin: *` headers for local development.

## 💡 Troubleshooting

**"NEWS_API_KEY is not set" error:**
- Make sure you've created the `.env` file in the `backend` folder
- Check that your API key is correctly copied (no extra spaces)
- Restart the Flask server after adding the `.env` file

**API not connecting:**
- Verify both the backend and frontend servers are running
- Check that the `VITE_API_BASE` in frontend matches your Flask server URL
- Look for any firewall or port conflicts

**No articles showing:**
- Check your internet connection
- Verify your NewsAPI key is valid and hasn't exceeded rate limits
- Open the browser console (F12) to see any error messages

## 🎨 Screenshots
<img width="1363" height="653" alt="Screenshot from 2026-01-04 02-29-54" src="https://github.com/user-attachments/assets/5ba230d3-3e36-4aeb-8434-dfe5231cc4e0" />
<img width="1363" height="653" alt="Screenshot from 2026-01-04 02-29-32" src="https://github.com/user-attachments/assets/23c58f76-5ea8-4742-9236-d6aa73a1c37a" />


## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👨‍💻 Author

Built with ❤️ by Daad

---

**Happy News Browsing! 📰✨**
