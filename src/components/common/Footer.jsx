import { useState } from "react";

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(240); // 4 minutos en segundos
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    if (e.target.value > 0) {
      setIsMuted(false);
    }
  };

  const handleProgressChange = (e) => {
    setCurrentTime(e.target.value);
  };

  return (
    <footer className="music-player bg-dark-custom border-top border-secondary fixed-bottom">
      <div className="container-fluid py-2">
        <div className="row align-items-center">
          {/* Current Song Info */}
          <div className="col-lg-3 col-md-4 col-4">
            <div className="d-flex align-items-center">
              <div className="current-song-image me-3">
                <img
                  src="https://via.placeholder.com/56x56/1db954/ffffff?text=♪"
                  alt="Current Song"
                  className="rounded"
                  style={{ width: "56px", height: "56px" }}
                />
              </div>
              <div className="current-song-info d-none d-md-block">
                <h6 className="mb-0 text-white">Canción de Ejemplo</h6>
                <small className="text-secondary-custom">
                  Artista de Ejemplo
                </small>
              </div>
              <div className="song-actions ms-3 d-none d-md-block">
                <button className="btn btn-sm btn-outline-light me-2">
                  <i className="bi bi-heart"></i>
                </button>
                <button className="btn btn-sm btn-outline-light">
                  <i className="bi bi-pip"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Player Controls */}
          <div className="col-lg-6 col-md-4 col-4">
            <div className="player-controls text-center">
              {/* Control Buttons */}
              <div className="control-buttons mb-2">
                <button className="btn btn-sm btn-outline-light me-2">
                  <i className="bi bi-shuffle"></i>
                </button>
                <button className="btn btn-sm btn-outline-light me-2">
                  <i className="bi bi-skip-backward-fill"></i>
                </button>
                <button
                  className="btn btn-success btn-lg rounded-circle me-2"
                  onClick={togglePlay}
                >
                  <i
                    className={`bi ${
                      isPlaying ? "bi-pause-fill" : "bi-play-fill"
                    }`}
                  ></i>
                </button>
                <button className="btn btn-sm btn-outline-light me-2">
                  <i className="bi bi-skip-forward-fill"></i>
                </button>
                <button className="btn btn-sm btn-outline-light">
                  <i className="bi bi-repeat"></i>
                </button>
              </div>

              {/* Progress Bar */}
              <div className="progress-container d-flex align-items-center d-none d-md-flex">
                <small className="text-secondary-custom me-2">
                  {formatTime(currentTime)}
                </small>
                <div
                  className="progress flex-grow-1 mx-2"
                  style={{ height: "4px" }}
                >
                  <input
                    type="range"
                    className="form-range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={handleProgressChange}
                    style={{ width: "100%" }}
                  />
                </div>
                <small className="text-secondary-custom ms-2">
                  {formatTime(duration)}
                </small>
              </div>
            </div>
          </div>

          {/* Volume and Additional Controls */}
          <div className="col-lg-3 col-md-4 col-4">
            <div className="d-flex align-items-center justify-content-end">
              {/* Queue and Connect */}
              <button className="btn btn-sm btn-outline-light me-2 d-none d-lg-block">
                <i className="bi bi-list-ul"></i>
              </button>
              <button className="btn btn-sm btn-outline-light me-2 d-none d-lg-block">
                <i className="bi bi-cast"></i>
              </button>

              {/* Volume Control */}
              <div className="volume-control d-flex align-items-center d-none d-md-flex">
                <button
                  className="btn btn-sm btn-outline-light me-2"
                  onClick={toggleMute}
                >
                  <i
                    className={`bi ${
                      isMuted || volume == 0
                        ? "bi-volume-mute"
                        : volume < 50
                        ? "bi-volume-down"
                        : "bi-volume-up"
                    }`}
                  ></i>
                </button>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  style={{ width: "100px" }}
                />
              </div>

              {/* Fullscreen */}
              <button className="btn btn-sm btn-outline-light ms-2 d-none d-lg-block">
                <i className="bi bi-arrows-fullscreen"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
