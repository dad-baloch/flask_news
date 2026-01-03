from flask import Flask, render_template, request, jsonify
import requests
import os
from dotenv import load_dotenv


load_dotenv()
API_KEY = os.getenv("NEWS_API_KEY")
# Create a flask app
app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('FLASK_SECRET', 'devkey')


@app.route("/api/news")
def api_news():
    """Return news as JSON for the React frontend."""
    query = request.args.get("query", "latest")

    if not API_KEY:
        resp = jsonify(
            {"error": "NEWS_API_KEY is not set. Add it to a .env file.", "articles": [], "query": query})
        resp.headers["Access-Control-Allow-Origin"] = "*"
        return resp, 500

    url = "https://newsapi.org/v2/everything"
    params = {"q": query, "pageSize": 20, "language": "en", "apiKey": API_KEY}

    try:
        response = requests.get(url, params=params, timeout=6)
        response.raise_for_status()
        news_data = response.json()
        articles = news_data.get("articles", []) or []
        articles = [a for a in articles if a.get("title") and a.get("url")]

        resp = jsonify({"articles": articles, "query": query})
        resp.headers["Access-Control-Allow-Origin"] = "*"
        return resp
    except Exception as exc:
        resp = jsonify({"error": str(exc), "articles": [], "query": query})
        resp.headers["Access-Control-Allow-Origin"] = "*"
        return resp, 500


if __name__ == "__main__":
    app.run(debug=False)
