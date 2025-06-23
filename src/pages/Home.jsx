import Loading from "../components/common/Loading";
import Layout from "../components/layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="container-fluid p-4 fade-in">
        <div className="row mb-4">
          <div className="col-12">
            <h1 className="h2 mb-1">Buenos días</h1>
            <p className="text-secondary-custom mb-4">Descubre nueva música</p>
          </div>
        </div>

        {/* Sección de accesos rápidos */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="row g-3">
              {[
                {
                  name: "Liked Songs",
                  icon: "heart-fill",
                  color: "linear-gradient(135deg, #450af5, #c4efd9)",
                },
                {
                  name: "Recently Played",
                  icon: "clock-history",
                  color: "linear-gradient(135deg, #1e3264, #f18226)",
                },
                {
                  name: "Top Mix",
                  icon: "music-note-list",
                  color: "linear-gradient(135deg, #8400ff, #ff8400)",
                },
                {
                  name: "Discover Weekly",
                  icon: "compass",
                  color: "linear-gradient(135deg, #1db954, #1ed760)",
                },
              ].map((item, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                  <div
                    className="card bg-hover-card h-100 card-hover"
                    style={{ background: item.color }}
                  >
                    <div className="card-body d-flex align-items-center p-3">
                      <i className={`bi bi-${item.icon} fs-3 me-3`}></i>
                      <h6 className="mb-0 fw-bold">{item.name}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sección "Hechas para ti" */}
        <div className="row mb-4">
          <div className="col-12">
            <h3 className="h4 mb-3">Hechas para ti</h3>
            <Loading size="skeleton" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
