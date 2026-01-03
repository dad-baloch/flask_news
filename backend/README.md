# Daad News - Flask News Aggregator
A simple news aggregator web application built with Flask that fetches and displays the latest articles from various sources using the NewsAPI. This project is designed to be a clean, functional portfolio piece demonstrating skills in Python, Flask, and frontend integration with Bootstrap.
## Features

- **Dynamic News Feed:** Fetches and displays news articles based on user search queries or predefined categories.
- **Search Functionality:** Allows users to search for news on any topic.
- **Categorized Browsing:** Includes navigation links for popular categories like "Latest," "US," "Technology," and more.
- **Responsive Design:** Utilizes Bootstrap to ensure the application is usable and looks great on both desktop and mobile devices.
- **Error Handling:** Provides clear feedback to the user if the NewsAPI key is missing or if there's an issue fetching data.

## Tech Stack

- **Backend:** Python, Flask
- **Frontend:** HTML, CSS, Bootstrap 5
- **API:** [NewsAPI](https://newsapi.org/) for fetching news articles.
- **Environment Management:** `python-dotenv` for managing environment variables.

## Local Setup and Installation

To run this project on your local machine, please follow these steps:

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <repository-directory>
```

### 2. Create a Virtual Environment

It's recommended to use a virtual environment to manage project dependencies.

```bash
python -m venv .venv
source .venv/bin/activate
```
*(On Windows, use `.venv\Scripts\activate`)*

### 3. Install Dependencies

Install the required Python packages using pip:

```bash
pip install -r requirements.txt
```

### 4. Configure Environment Variables

This project requires an API key from [NewsAPI](https://newsapi.org/).

1.  Sign up on the NewsAPI website to get your free developer API key.
2.  Create a file named `.env` in the root of the project directory.
3.  Add the following lines to the `.env` file, replacing the placeholder values with your actual keys:

```env
NEWS_API_KEY="YOUR_NEWS_API_KEY_HERE"
FLASK_SECRET="a_strong_and_secret_key_for_sessions"
```

### 5. Run the Application

Start the Flask development server:

```bash
python app.py
```

Open your web browser and navigate to `http://127.0.0.1:5000` to view the application.

<img width="1359" height="653" alt="navbar_SS" src="https://github.com/user-attachments/assets/bba4d5a6-7e3e-4a35-a1b0-f209a1b0af16" />
<img width="1359" height="653" alt="articles_SS" src="https://github.com/user-attachments/assets/57df4b7b-6c44-46d6-8b4f-95751e3b0f42" />
<img width="1359" height="653" alt="footer_SS" src="https://github.com/user-attachments/assets/63dec358-c237-4405-a09c-1889856fdfea" />
