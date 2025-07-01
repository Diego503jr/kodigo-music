import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Registry from "../pages/Registry";
import Library from "../pages/Library";
import { AuthProvider } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return !user ? children : <Navigate to="/login" />;
};

const PublicRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" />;
};


const AppRouter = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route 
          path="/search" 
          element={
            <PrivateRoute>
              <Search />
            </PrivateRoute>} />
        <Route 
          path="/library" 
          element={
            <PrivateRoute>
              <Library />
            </PrivateRoute>
          } />
        <Route 
          path="/home" 
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
        <Route 
          path="/registry" 
          element={
              <PublicRoute>
                <Registry />
              </PublicRoute>
          } />
        <Route 
          path="/" 
          element={
              <PublicRoute>
                <Login />
              </PublicRoute>
          } />
          <Route path="*" element={<h1>PAGINA NO ENCONTRADA</h1>} />
      </Routes>
    </AuthProvider>
  );
};

export default AppRouter;