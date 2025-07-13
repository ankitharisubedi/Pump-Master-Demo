import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeletePumpModal = ({ show, pump, onDelete, onClose }) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete <strong>{pump?.name}</strong>? This action cannot be undone.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => {
          onDelete();
          onClose();
        }}>
          Delete Pump
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeletePumpModal;