import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Library from "../pages/Library";

const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/library" element={<Library />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
};

export default AppRouter;
