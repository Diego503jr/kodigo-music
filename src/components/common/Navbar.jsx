import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="d-lg-none bg-dark-custom border-bottom border-secondary">
        <div className="d-flex justify-content-between align-items-center p-3">
          <Link to="/" className="text-decoration-none">
            <h4 className="text-success mb-0">
              <i className="bi bi-spotify me-2"></i>
              Kodigo Music
            </h4>
          </Link>
          <button
            className="btn btn-outline-light"
            type="button"
            onClick={toggleSidebar}
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <nav
        className={`sidebar bg-dark-custom border-end border-secondary ${isCollapsed ? "collapsed" : ""}`}
      >
        <div className="sidebar-content p-3 h-100 d-flex flex-column">
          {/* Logo - Solo visible en desktop */}
          <div className="d-none d-lg-block mb-4">
            <Link to="/" className="text-decoration-none">
              <h4 className="text-success mb-0">
                <i className="bi bi-spotify me-2"></i>
                Kodigo Music
              </h4>
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="nav-section mb-4">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to="/"
                  className={`nav-link text-white d-flex align-items-center ${isActive(
                    "/"
                  )}`}
                >
                  <i className="bi bi-house-fill me-3"></i>
                  <span>Inicio</span>
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/search"
                  className={`nav-link text-white d-flex align-items-center ${isActive(
                    "/search"
                  )}`}
                >
                  <i className="bi bi-search me-3"></i>
                  <span>Buscar</span>
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/library"
                  className={`nav-link text-white d-flex align-items-center ${isActive(
                    "/library"
                  )}`}
                >
                  <i className="bi bi-collection me-3"></i>
                  <span>Tu biblioteca</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Playlist Section */}
          <div className="nav-section mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-secondary-custom fw-bold">PLAYLISTS</span>
              <button className="btn btn-sm btn-outline-secondary">
                <i className="bi bi-plus-lg"></i>
              </button>
            </div>
            <ul className="nav flex-column playlist-nav">
              <li className="nav-item mb-1">
                <a href="#" className="nav-link text-secondary-custom py-1">
                  <i className="bi bi-music-note-list me-2"></i>
                  Mis favoritas
                </a>
              </li>
              <li className="nav-item mb-1">
                <a href="#" className="nav-link text-secondary-custom py-1">
                  <i className="bi bi-music-note-list me-2"></i>
                  Pop Latino
                </a>
              </li>
              <li className="nav-item mb-1">
                <a href="#" className="nav-link text-secondary-custom py-1">
                  <i className="bi bi-music-note-list me-2"></i>
                  Rock Clásico
                </a>
              </li>
              <li className="nav-item mb-1">
                <a href="#" className="nav-link text-secondary-custom py-1">
                  <i className="bi bi-music-note-list me-2"></i>
                  Descubrimiento Semanal
                </a>
              </li>
            </ul>
          </div>

          {/* User Section */}
          <div className="nav-section mt-auto">
            <div className="border-top border-secondary pt-3">
              <Link
                to="/login"
                className="nav-link text-white d-flex align-items-center"
              >
                <i className="bi bi-person-circle me-3"></i>
                <span>Iniciar Sesión</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isCollapsed && (
        <div className="mobile-overlay d-lg-none" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default Navbar;
