import React from "react";
import { Modal, Button, Spinner, Alert } from "react-bootstrap";

function DeleteUserModal({ show, user, onClose, onConfirm, loading, error }) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && (
          <Alert variant="danger" className="mt-3">
            {error}
          </Alert>
        )}
        <p>
          Are you sure you want to delete user{" "}
          <strong>
            {user?.first_name} {user?.last_name}
          </strong>
          ?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose} disabled={loading}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm} disabled={loading}>
          {loading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="me-2"
              />
              Deleting...
            </>
          ) : (
            "Delete"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteUserModal;
