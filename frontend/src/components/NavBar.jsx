import { useState } from "react";

const categories = [
    "latest",
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
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container-fluid">
                    <span className="navbar-brand fw-semibold">Daad-News</span>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {categories.map((cat) => (
                                <li className="nav-item" key={cat}>
                                    <button
                                        type="button"
                                        className={`nav-link btn btn-link ${activeQuery.toLowerCase() === cat.toLowerCase() ? "active" : ""}`}
                                        onClick={() => handleCategory(cat)}
                                    >
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            <form className="d-flex mt-3" role="search" onSubmit={handleSubmit}>
                <input
                    className="form-control me-2"
                    type="text"
                    name="query"
                    placeholder="Search"
                    aria-label="Search"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
                <button id="search-btn" className="btn btn-primary" type="submit">
                    Search
                </button>
            </form>
        </>
    );
}