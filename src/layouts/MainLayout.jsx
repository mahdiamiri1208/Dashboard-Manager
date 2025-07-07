import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Container } from "react-bootstrap";

function MainLayout({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <div
        style={{
          width: "240px",
          minWidth: "240px",
          backgroundColor: "#f8f9fa",
          overflowY: "auto",
        }}
        className="shadow"
      >
        <Sidebar />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <div
          style={{
            flex: 1,
            padding: "1.5rem",
            overflowY: "auto",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
