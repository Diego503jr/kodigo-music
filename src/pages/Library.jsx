import Loading from "../components/common/Loading";
import Layout from "../components/layout/Layout";

const Library = () => {
  return (
    <Layout>
      <div className="container-fluid bg-dark-custom min-vh-100 p-4">
        <h2 className="mb-4">
          <i className="bi bi-collection me-2"></i>
          Tu Biblioteca
        </h2>

        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex gap-2 mb-3">
              <button className="btn btn-outline-light btn-sm">
                Recientes
              </button>
              <button className="btn btn-outline-light btn-sm">
                Agregados recientemente
              </button>
              <button className="btn btn-outline-light btn-sm">Artistas</button>
              <button className="btn btn-outline-light btn-sm">Álbumes</button>
            </div>
          </div>
        </div>

        {/* Mostrar loading skeleton mientras "carga" */}
        <Loading size="skeleton" />
      </div>
    </Layout>
  );
};

export default Library;
