import { Container } from "react-bootstrap";

export function Footer() {
    return (
        <footer className="footer mt-5 py-4 bg-dark text-white">
            <Container>
                <div className="text-center">
                    <p className="mb-2 fw-semibold">📰 Daad News</p>
                    <p className="mb-1 small text-muted">Your trusted source for breaking news worldwide</p>
                    <p className="mb-0 small">&copy; {new Date().getFullYear()} Daad News. All Rights Reserved.</p>
                </div>
            </Container>
        </footer>
    );
}
