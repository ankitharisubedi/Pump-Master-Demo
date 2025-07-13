import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditPumpModal = ({ show, pump, onSave, onClose }) => {
  const [formData, setFormData] = useState(pump || {});
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity()) {
      onSave(formData);
      onClose();
    } else {
      setValidated(true);
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Pump: {pump?.name}</Modal.Title>
      </Modal.Header>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Pump Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              value={formData.name || ''}
              onChange={handleChange}
            />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Type</Form.Label>
            <Form.Select 
              name="type" 
              value={formData.type || ''}
              onChange={handleChange}
              required
            >
              <option value="">Select type</option>
              <option value="Gemfragid">Gemfragid</option>
              <option value="Submersible">Submersible</option>
              <option value="Delormapin">Delormapin</option>
              <option value="Brainy">Brainy</option>
              <option value="Pentastic">Pentastic</option>
            </Form.Select>
          </Form.Group>
          
          <div className="row">
            <div className="col">
              <Form.Group className="mb-3">
                <Form.Label>Current Pressure (PSI)</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="currentPressure"
                  min={formData.minPressure}
                  max={formData.maxPressure}
                  value={formData.currentPressure || ''}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col">
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select 
                  name="status" 
                  value={formData.status || ''}
                  onChange={handleChange}
                  required
                >
                  <option value="Operational">Operational</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Offline">Offline</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default EditPumpModal;