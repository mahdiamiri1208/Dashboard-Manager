import { useState, useEffect } from "react";
import { Offcanvas } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../style/MainLayout.css";

function MainLayout({ children }) {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 1100);
        if (window.innerWidth >= 1100) {
          setShowMobileSidebar(false);
        }
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="main-layout">
      {!isMobile && (
        <div className="main-sidebar">
          <Sidebar />
        </div>
      )}

      <div className="main-content">
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

        <div className="main-body">{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
