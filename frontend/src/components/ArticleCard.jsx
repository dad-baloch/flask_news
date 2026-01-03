import { Card, Badge } from "react-bootstrap";

export function ArticleCard({ article }) {
    const published = article?.publishedAt ? new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "";
    const sourceName = article?.source?.name || "Unknown";

    return (
        <Card className="news-article h-100 shadow-sm border-0">
            {article.urlToImage && (
                <div className="article-image-wrapper">
                    <Card.Img
                        variant="top"
                        src={article.urlToImage}
                        alt={article.title}
                        className="article-image"
                        loading="lazy"
                    />
                </div>
            )}
            <Card.Body className="d-flex flex-column">
                <div className="mb-2 d-flex justify-content-between align-items-center">
                    <Badge bg="primary" className="source-badge">{sourceName}</Badge>
                    <small className="text-muted">{published}</small>
                </div>
                <Card.Title className="article-title">
                    <a href={article.url} target="_blank" rel="noreferrer" className="stretched-link">
                        {article.title}
                    </a>
                </Card.Title>
                {article.description && (
                    <Card.Text className="article-description text-muted">
                        {article.description.length > 120
                            ? `${article.description.substring(0, 120)}...`
                            : article.description}
                    </Card.Text>
                )}
            </Card.Body>
        </Card>
    );
}
