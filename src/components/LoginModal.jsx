import { Modal, Button } from "react-bootstrap";

function LoginModal({ show, onClose, onLogin }) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>ورود</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>برای مشاهده کاربران لطفاً وارد شوید.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onLogin}>
          ورود
        </Button>
        <Button variant="secondary" onClick={onClose}>
          بستن
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
