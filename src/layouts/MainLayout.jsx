import { useState, useEffect } from "react";
import { Offcanvas } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function MainLayout({ children }) {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
      if (window.innerWidth >= 1100) {
        setShowMobileSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      {!isMobile && (
        <div
          style={{
            width: "260px",
            backgroundColor: "#fff",
            overflowY: "auto",
            boxShadow: "0 0 10px rgba(63, 63, 63, 0.08)",
            flexShrink: 0,
          }}
        >
          <Sidebar />
        </div>
      )}

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        <Header onMenuClick={() => setShowMobileSidebar(true)} />

        <Offcanvas
          show={showMobileSidebar}
          onHide={() => setShowMobileSidebar(false)}
          placement="start"
          style={{ width: 260 }}
        >
        </Offcanvas>

        <div
          style={{
            flex: 1,
            padding: "1.5rem",
            overflow: "auto",
            minWidth: 0,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
