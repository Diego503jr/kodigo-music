import Navbar from "../common/Navbar";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="main-content">
        <Header />
        <main
          className="content-area"
          style={{ paddingBottom: "90px", minHeight: "calc(100vh - 90px)" }}
        >
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
