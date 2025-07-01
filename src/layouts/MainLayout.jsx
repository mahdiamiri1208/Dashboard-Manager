import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";

function MainLayout({ children }) {
  return (
    <Container fluid>
      <Row style={{ height: '100vh' }}>
        <Col xs={2} className="bg-light p-0 shadow">
          <Sidebar />
        </Col>

        <Col xs={10} className="p-0 d-flex flex-column">
          <Header />
          <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto' }}>
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MainLayout;
