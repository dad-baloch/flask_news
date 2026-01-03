from flask import Flask, render_template, request
import requests
import os
from dotenv import load_dotenv


load_dotenv()
API_KEY = os.getenv("NEWS_API_KEY")
# Create a flask app
app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('FLASK_SECRET', 'devkey')


@app.route("/")
def index():
    """Render the news list.

    - reads `query` from GET params (default: latest)
    - queries NewsAPI (requires NEWS_API_KEY in .env)
    - returns a friendly page when the key or data is missing
    """
    query = request.args.get("query", "latest")

    # If API key is missing, show an informative message in the UI instead of crashing
    if not API_KEY:
        return render_template("index.html", articles=[], query=query, error="NEWS_API_KEY is not set. Add it to a .env file.")

    url = "https://newsapi.org/v2/everything"
    params = {"q": query, "pageSize": 20, "language": "en", "apiKey": API_KEY}

    try:
        response = requests.get(url, params=params, timeout=6)
        response.raise_for_status()
        news_data = response.json()
        articles = news_data.get('articles', []) or []

        # Basic filtering: keep items with title and url
        articles = [a for a in articles if a.get('title') and a.get('url')]
    except Exception as exc:
        # Pass a simple error message to the template
        return render_template("index.html", articles=[], query=query, error=str(exc))

    return render_template("index.html", articles=articles, query=query)


if __name__ == "__main__":
    app.run(debug=False)
