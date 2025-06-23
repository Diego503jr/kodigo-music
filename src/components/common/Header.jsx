import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const goBack = () => {
    window.history.back();
  };

  const goForward = () => {
    window.history.forward();
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const isSearchPage = location.pathname === "/search";

  return (
    <header className="main-header bg-dark-custom sticky-top">
      <div className="container-fluid">
        <div className="row align-items-center py-3">
          {/* Navigation Controls */}
          <div className="col-lg-3 col-4">
            <div className="d-flex align-items-center">
              <button
                className="btn btn-dark rounded-circle me-2"
                onClick={goBack}
                title="Atrás"
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <button
                className="btn btn-dark rounded-circle"
                onClick={goForward}
                title="Adelante"
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="col-lg-6 col-4">
            {isSearchPage && (
              <form onSubmit={handleSearch} className="search-form">
                <div className="input-group">
                  <span className="input-group-text bg-white border-0">
                    <i className="bi bi-search text-dark"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="¿Qué quieres escuchar?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ backgroundColor: "white", color: "black" }}
                  />
                </div>
              </form>
            )}
          </div>

          {/* User Menu */}
          <div className="col-lg-3 col-4">
            <div className="d-flex align-items-center justify-content-end">
              {/* Upgrade Button */}
              <button className="btn btn-outline-light me-3 d-none d-md-block">
                <i className="bi bi-arrow-up-circle me-1"></i>
                Actualizar
              </button>

              {/* Download App */}
              <button className="btn btn-dark me-3 d-none d-lg-block">
                <i className="bi bi-download me-1"></i>
                Instalar App
              </button>

              {/* Notifications */}
              <button className="btn btn-dark me-3 position-relative">
                <i className="bi bi-bell"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  3
                </span>
              </button>

              {/* User Profile */}
              <div className="dropdown">
                <button
                  className="btn btn-dark dropdown-toggle d-flex align-items-center"
                  onClick={toggleUserMenu}
                  aria-expanded={showUserMenu}
                >
                  <div className="user-avatar me-2">
                    <i className="bi bi-person-circle fs-4"></i>
                  </div>
                  <span className="d-none d-md-block">Usuario</span>
                </button>

                {showUserMenu && (
                  <ul className="dropdown-menu dropdown-menu-end show">
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-person me-2"></i>
                        Perfil
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-gear me-2"></i>
                        Configuración
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-box-arrow-right me-2"></i>
                        Cerrar sesión
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
