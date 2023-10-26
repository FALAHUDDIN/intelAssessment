import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ height: "100vh" }}
        >
            <div className="fs-3">404</div>
            <div className="fs-1">Nothing Here</div>
            <Link to="/about-me" className="fs-5">
                About Me
            </Link>
        </div>
    );
}

export default NotFound;
