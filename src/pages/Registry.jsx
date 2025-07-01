import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Registry = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

const { signup } = useAuth();

const onSubmit = async (data) => {
  setIsLoading(true);
  try {
    await signup(data.email, data.password);
    navigate("/");
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(135deg, #1e1e1e 0%, #121212 100%)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="text-center mb-4">
              {/* Logo de Spotify */}
              <div className="mb-4">
                <i
                  className="bi bi-spotify text-success"
                  style={{ fontSize: "4rem" }}
                ></i>
              </div>
              <h1
                className="text-white mb-2"
                style={{ fontSize: "2rem", fontWeight: "700" }}
              >
                Registrate en Kodigo Music
              </h1>
            </div>

            <div
              className="card border-0"
              style={{ backgroundColor: "#121212", borderRadius: "8px" }}
            >
              <div className="card-body p-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Email Field */}
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="form-label text-white fw-bold"
                    >
                      Correo electrónico o nombre de usuario
                    </label>
                    <input
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      id="email"
                      placeholder="Correo electrónico o nombre de usuario"
                      style={{
                        backgroundColor: "#727272",
                        border: "1px solid #727272",
                        color: "white",
                        padding: "12px 14px",
                        borderRadius: "4px",
                      }}
                      {...register("email", {
                        required: "El correo electrónico es obligatorio",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Introduce un correo electrónico válido",
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="text-danger small mt-1">
                        <i className="bi bi-exclamation-triangle me-1"></i>
                        {errors.email.message}
                      </div>
                    )}
                  </div>

                  {/* Password Field */}
                  <div className="mb-3">
                    <label
                      htmlFor="password"
                      className="form-label text-white fw-bold"
                    >
                      Contraseña
                    </label>
                    <div className="position-relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        id="password"
                        placeholder="Contraseña"
                        style={{
                          backgroundColor: "#727272",
                          border: "1px solid #727272",
                          color: "white",
                          padding: "12px 14px",
                          borderRadius: "4px",
                          paddingRight: "45px",
                        }}
                        {...register("password", {
                          required: "La contraseña es obligatoria",
                          minLength: {
                            value: 6,
                            message:
                              "La contraseña debe tener al menos 6 caracteres",
                          },
                        })}
                      />
                      <button
                        type="button"
                        className="btn position-absolute end-0 top-0 h-100"
                        onClick={togglePasswordVisibility}
                        style={{
                          border: "none",
                          background: "transparent",
                          color: "#b3b3b3",
                          zIndex: 5,
                        }}
                      >
                        <i
                          className={`bi ${
                            showPassword ? "bi-eye-slash" : "bi-eye"
                          }`}
                        ></i>
                      </button>
                    </div>
                    {errors.password && (
                      <div className="text-danger small mt-1">
                        <i className="bi bi-exclamation-triangle me-1"></i>
                        {errors.password.message}
                      </div>
                    )}
                  </div>

                  {/* Remember Me */}
                  <div className="mb-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberMe"
                        {...register("rememberMe")}
                      />
                      <label
                        className="form-check-label text-white"
                        htmlFor="rememberMe"
                      >
                        Recuérdame
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn w-100 text-black fw-bold py-3 mb-4"
                    disabled={isLoading}
                    style={{
                      backgroundColor: "#1db954",
                      border: "none",
                      borderRadius: "500px",
                      fontSize: "16px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#1ed760")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#1db954")
                    }
                  >
                    {isLoading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Iniciando sesión...
                      </>
                    ) : (
                      "Iniciar sesión"
                    )}
                  </button>

                  {/* Forgot Password */}
                  <div className="text-center mb-4">
                    <a
                      href="#"
                      className="text-white text-decoration-underline"
                    >
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                </form>

                {/* Divider */}
                <hr style={{ borderColor: "#727272", margin: "32px 0" }} />

                {/* Social Login */}
                <div className="text-center mb-4">
                  <p className="text-white mb-3">¿No tienes cuenta?</p>

                  {/* Google Login */}
                  <button
                    type="button"
                    className="btn w-100 mb-2 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid #727272",
                      color: "white",
                      padding: "12px",
                      borderRadius: "500px",
                    }}
                  >
                    <i className="bi bi-google me-2"></i>
                    Continuar con Google
                  </button>

                  {/* Facebook Login */}
                  <button
                    type="button"
                    className="btn w-100 mb-3 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid #727272",
                      color: "white",
                      padding: "12px",
                      borderRadius: "500px",
                    }}
                  >
                    <i className="bi bi-facebook me-2"></i>
                    Continuar con Facebook
                  </button>
                </div>

                {/* Sign Up Link */}
                <hr style={{ borderColor: "#727272" }} />
                <div className="text-center pt-3">
                  <p className="text-secondary mb-2">¿No tienes cuenta?</p>
                  <a
                    href="/register"
                    className="text-white fw-bold text-decoration-underline"
                    style={{ fontSize: "16px" }}
                  >
                    Regístrate en Spotify
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registry;
