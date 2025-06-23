import Layout from "../components/layout/Layout";
import { useState } from "react";
import { browseCategories, mockData } from "../data/data";
// Importa tu SearchBar y data
// import SearchBar from "../components/SearchBar";
// import { mockData, browseCategories } from "../data/data";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Función de búsqueda
  const handleSearch = (query) => {
    setSearchQuery(query);
    setIsSearching(true);

    if (query.trim() === "") {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    // Simular búsqueda - reemplaza con tu lógica real
    setTimeout(() => {
      const filtered = mockData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.artist.toLowerCase().includes(query.toLowerCase()) ||
          item.album.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
      setIsSearching(false);
    }, 300);
  };

  // Componente SearchBar interno (reemplaza con tu componente)
  const SearchBar = ({ onSearch, placeholder = "¿Qué quieres escuchar?" }) => {
    const handleInputChange = (e) => {
      const value = e.target.value;
      onSearch(value);
    };

    return (
      <div className="position-relative mb-4">
        <div className="input-group input-group-lg">
          <span className="input-group-text bg-white border-0">
            <i className="bi bi-search text-muted"></i>
          </span>
          <input
            type="text"
            className="form-control border-0 shadow-sm"
            placeholder={placeholder}
            onChange={handleInputChange}
            autoComplete="off"
            style={{
              backgroundColor: "white",
              fontSize: "16px",
              paddingLeft: "10px",
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div className="container-fluid bg-dark-custom min-vh-100">
        <div className="row">
          <div className="col-12">
            <div className="p-4">
              {/* Header */}
              <div className="mb-4">
                <h2 className="text-white mb-4">
                  <i className="bi bi-search me-2"></i>
                  Buscar
                </h2>

                {/* SearchBar */}
                <SearchBar onSearch={handleSearch} />
              </div>

              {/* Contenido condicional */}
              {searchQuery ? (
                /* Resultados de búsqueda */
                <div>
                  <h4 className="text-white mb-3">
                    Resultados para "{searchQuery}"
                  </h4>

                  {isSearching ? (
                    <div className="text-center py-5">
                      <div
                        className="spinner-border text-success"
                        role="status"
                      >
                        <span className="visually-hidden">Buscando...</span>
                      </div>
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div className="row">
                      {searchResults.map((item) => (
                        <div key={item.id} className="col-12 mb-2">
                          <div
                            className="d-flex align-items-center p-3 rounded hover-bg-secondary cursor-pointer"
                            style={{
                              backgroundColor: "rgba(255,255,255,0.1)",
                              transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "rgba(255,255,255,0.2)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "rgba(255,255,255,0.1)";
                            }}
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="rounded me-3"
                              style={{ width: "64px", height: "64px" }}
                            />
                            <div className="flex-grow-1">
                              <h6 className="text-white mb-1">{item.title}</h6>
                              <p className="text-muted mb-0 small">
                                {item.artist} • {item.album}
                              </p>
                            </div>
                            <span className="text-muted small">
                              {item.duration}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-5">
                      <i className="bi bi-music-note-beamed text-muted display-1"></i>
                      <h5 className="text-muted mt-3">
                        No se encontraron resultados
                      </h5>
                      <p className="text-muted">
                        Intenta usar otras palabras clave
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                /* Categorías de navegación */
                <div>
                  <h4 className="text-white mb-4">Explorar todo</h4>
                  <div className="row g-3">
                    {browseCategories.map((category) => (
                      <div
                        key={category.id}
                        className="col-lg-3 col-md-4 col-sm-6"
                      >
                        <div
                          className="card border-0 h-100 cursor-pointer position-relative overflow-hidden"
                          style={{
                            background: category.color,
                            minHeight: "120px",
                            transition: "transform 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          <div className="card-body d-flex flex-column justify-content-between p-3">
                            <h6 className="text-white fw-bold mb-0">
                              {category.name}
                            </h6>
                            <div className="align-self-end">
                              <span
                                style={{
                                  fontSize: "2rem",
                                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                                }}
                              >
                                {category.image}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Secciones adicionales */}
                  <div className="mt-5">
                    <h5 className="text-white mb-3">Recientemente buscado</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {[
                        "Bad Bunny",
                        "Taylor Swift",
                        "Reggaeton",
                        "Rock en Español",
                      ].map((term, index) => (
                        <span
                          key={index}
                          className="badge bg-secondary px-3 py-2 cursor-pointer"
                          style={{
                            fontSize: "14px",
                            transition: "all 0.2s ease",
                          }}
                          onClick={() => handleSearch(term)}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#6c757d";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#6c757d";
                          }}
                        >
                          {term}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
