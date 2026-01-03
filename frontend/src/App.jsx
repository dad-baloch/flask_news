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
    <>
      <NavBar activeQuery={query} onCategorySelect={fetchArticles} onSearch={fetchArticles} />

      <Container className="my-4">
        <h1 className="my-4 text-center">Welcome to Daad News</h1>

        {error && (
          <Alert variant="danger" className="error-banner">
            {error}
          </Alert>
        )}

        {loading ? (
          <div className="d-flex justify-content-center py-5">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-5">
            <p className="lead">No results found for "{query}".</p>
            <p className="text-muted">Try another search or browse the categories in the navbar.</p>
          </div>
        ) : (
          <Row>
            {articles.map((article, index) => (
              <Col md={6} key={`${article.url}-${index}`}>
                <ArticleCard article={article} />
              </Col>
            ))}
          </Row>
        )}
      </Container>

      <Footer />
    </>
  );
}

export default App;
