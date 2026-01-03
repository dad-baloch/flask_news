import { Card } from "react-bootstrap";

export function ArticleCard({ article }) {
    const published = article?.publishedAt ? article.publishedAt.slice(0, 10) : "";
    const sourceName = article?.source?.name || "Unknown";

    return (
        <Card className="mb-4 news-article h-100">
            {article.urlToImage && (
                <Card.Img variant="top" src={article.urlToImage} alt="picture" />
            )}
            <Card.Body className="p-3">
                <Card.Title as="h4">
                    <a href={article.url} target="_blank" rel="noreferrer">
                        {article.title}
                    </a>
                </Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <p className="text-muted small mb-0">
                    Source: {sourceName} • {published}
                </p>
            </Card.Body>
        </Card>
    );
}
