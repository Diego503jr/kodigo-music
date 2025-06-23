const Loading = ({
  size = "medium",
  text = "Cargando...",
  fullScreen = false,
}) => {
  // Diferentes tamaños de loading
  const getSizeClass = () => {
    switch (size) {
      case "small":
        return { spinner: "1rem", text: "small" };
      case "large":
        return { spinner: "3rem", text: "h4" };
      case "xlarge":
        return { spinner: "4rem", text: "h3" };
      default:
        return { spinner: "2rem", text: "h6" };
    }
  };

  const sizeConfig = getSizeClass();

  // Loading básico
  const BasicLoading = () => (
    <div className="d-flex flex-column align-items-center justify-content-center p-4">
      <div
        className="spinner-border text-success mb-3"
        style={{ width: sizeConfig.spinner, height: sizeConfig.spinner }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      {text && (
        <p className={`text-secondary-custom mb-0 ${sizeConfig.text}`}>
          {text}
        </p>
      )}
    </div>
  );

  // Loading con animación de Spotify
  const SpotifyLoading = () => (
    <div className="d-flex flex-column align-items-center justify-content-center p-4">
      <div className="spotify-loader mb-3">
        <div className="spotify-bars">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {text && (
        <p className={`text-secondary-custom mb-0 ${sizeConfig.text}`}>
          {text}
        </p>
      )}
    </div>
  );

  // Loading con logo animado
  const LogoLoading = () => (
    <div className="d-flex flex-column align-items-center justify-content-center p-4">
      <div className="logo-spinner mb-3">
        <i
          className="bi bi-spotify text-success spinning-logo"
          style={{ fontSize: sizeConfig.spinner }}
        ></i>
      </div>
      {text && (
        <p className={`text-secondary-custom mb-0 ${sizeConfig.text}`}>
          {text}
        </p>
      )}
    </div>
  );

  // Loading para skeleton cards
  const SkeletonLoading = () => (
    <div className="container-fluid">
      <div className="row">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
            <div className="card bg-card skeleton-card">
              <div className="skeleton-img"></div>
              <div className="card-body">
                <div className="skeleton-text skeleton-title"></div>
                <div className="skeleton-text skeleton-subtitle"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Loading de pantalla completa
  const FullScreenLoading = () => (
    <div className="fullscreen-loading bg-dark-custom d-flex align-items-center justify-content-center">
      <div className="text-center">
        <div className="spotify-loader-large mb-4">
          <div className="spotify-bars-large">
            <div className="bar-large"></div>
            <div className="bar-large"></div>
            <div className="bar-large"></div>
            <div className="bar-large"></div>
            <div className="bar-large"></div>
          </div>
        </div>
        <h2 className="text-success mb-3">
          <i className="bi bi-spotify me-2"></i>
          Kodigo Music
        </h2>
        <p className="text-secondary-custom">Preparando tu música...</p>
      </div>
    </div>
  );

  // Retornar el tipo de loading apropiado
  if (fullScreen) {
    return <FullScreenLoading />;
  }

  if (size === "skeleton") {
    return <SkeletonLoading />;
  }

  if (size === "spotify") {
    return <SpotifyLoading />;
  }

  if (size === "logo") {
    return <LogoLoading />;
  }

  return <BasicLoading />;
};

export default Loading;
