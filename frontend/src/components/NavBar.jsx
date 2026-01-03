import { useState } from "react";
import { Container, Navbar, Nav, Form, InputGroup, Button } from "react-bootstrap";

const categories = [
    "Latest",
    "US",
    "Pakistan",
    "Baloch",
    "World",
    "Technology"
];

export function NavBar({ activeQuery = "latest", onCategorySelect, onSearch }) {
    const [term, setTerm] = useState(activeQuery);

    const handleCategory = (cat) => {
        setTerm(cat);
        onCategorySelect?.(cat);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!term.trim()) return;
        onSearch?.(term.trim());
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom shadow-sm sticky-top">
            <Container>
                <Navbar.Brand className="fw-bold fs-4 brand-text">📰 Daad News</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-main" />
                <Navbar.Collapse id="navbar-main">
                    <Nav className="me-auto">
                        {categories.map((cat) => (
                            <Nav.Link
                                key={cat}
                                className={activeQuery.toLowerCase() === cat.toLowerCase() ? "active fw-semibold" : ""}
                                onClick={() => handleCategory(cat)}
                            >
                                {cat}
                            </Nav.Link>
                        ))}
                    </Nav>
                    <Form className="d-flex mt-2 mt-lg-0" role="search" onSubmit={handleSubmit}>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Search news..."
                                aria-label="Search"
                                value={term}
                                onChange={(e) => setTerm(e.target.value)}
                                className="search-input"
                            />
                            <Button variant="outline-light" type="submit">
                                🔍
                            </Button>
                        </InputGroup>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}