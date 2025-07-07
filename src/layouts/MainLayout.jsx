import { useState, useEffect } from "react";
import { Offcanvas } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function MainLayout({ children }) {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      if (window.innerWidth >= 992) {
        setShowMobileSidebar(false); 
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {!isMobile && (
        <div
          style={{
            width: "260px",
            backgroundColor: "#f8f9fa",
            overflowY: "auto",
          }}
          className="shadow"
        >
          <Sidebar />
        </div>
      )}

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header onMenuClick={() => setShowMobileSidebar(true)} />

        <Offcanvas
          show={showMobileSidebar}
          onHide={() => setShowMobileSidebar(false)}
          placement="start"
          style={{ width: 260 }}
        >
          <Offcanvas.Header className="pb-0" closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="p-0">
            <Sidebar isMobile onLinkClick={() => setShowMobileSidebar(false)} />
          </Offcanvas.Body>
        </Offcanvas>

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
