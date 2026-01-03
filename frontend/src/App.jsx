import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import axios from "axios";
import { NavBar } from "./components/NavBar";
import { ArticleCard } from "./components/ArticleCard";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

function App() {
  const [query, setQuery] = useState("latest");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchArticles = async (nextQuery) => {
    setLoading(true);
    setError("");
    try {
      const { data } = await axios.get(`${API_BASE}/api/news`, {
        params: { query: nextQuery }
      });
      setArticles(data.articles || []);
      setQuery(nextQuery);
    } catch (err) {
      const message = err?.response?.data?.error || err.message || "Failed to load news";
      setError(message);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app-wrapper">
      <NavBar activeQuery={query} onCategorySelect={fetchArticles} onSearch={fetchArticles} />

      <Container className="main-content py-4">
        <div className="header-section text-center mb-4">
          <h1 className="display-5 fw-bold text-gradient mb-2">Daad News</h1>
          <p className="lead text-muted">Your trusted source for breaking news and stories</p>
        </div>

        {error && (
          <Alert variant="danger" className="error-alert shadow-sm">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            {error}
          </Alert>
        )}

        {loading ? (
          <div className="loading-container text-center py-5">
            <Spinner animation="border" variant="primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <p className="mt-3 text-muted">Loading news...</p>
          </div>
        ) : articles.length === 0 ? (
          <div className="empty-state text-center py-5">
            <div className="empty-icon mb-3">📰</div>
            <p className="lead mb-2">No results found for "{query}"</p>
            <p className="text-muted">Try another search or browse the categories above</p>
          </div>
        ) : (
          <>
            <div className="results-header mb-3">
              <small className="text-muted">
                Showing {articles.length} articles for <strong>{query}</strong>
              </small>
            </div>
            <Row className="g-4">
              {articles.map((article, index) => (
                <Col xs={12} md={6} lg={4} key={`${article.url}-${index}`}>
                  <ArticleCard article={article} />
                </Col>
              ))}
            </Row>
          </>
        )}
      </Container>

      <Footer />
    </div>
  );
}

export default App;
