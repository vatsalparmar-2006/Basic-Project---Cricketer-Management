import { Link, Outlet } from "react-router-dom";
import backgroundImage from './Images/logo.png';

function Layout() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <a className="navbar-brand">
                                <img src={backgroundImage} alt="Logo" height="80rem" width="80rem" />
                            </a>
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
                                <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0" style={{ fontSize: '1rem' }}>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/cricketers">
                                            Cricketers
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
