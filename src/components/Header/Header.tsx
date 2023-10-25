import React, { useState, useEffect } from "react";

function Header() {
    const [currentHash, setCurrentHash] = useState<string>("");

    useEffect(() => {
        setCurrentHash(window.location.hash);
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav">
                            <a
                                className={
                                    currentHash === "#/about-me"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                href="#/about-me"
                                onClick={() => setCurrentHash("#/about-me")}
                            >
                                About Me
                            </a>
                            <a
                                className={
                                    currentHash === "#/records"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                                href="#/records"
                                onClick={() => setCurrentHash("#/records")}
                            >
                                Records
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
