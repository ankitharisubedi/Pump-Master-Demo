import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddPumpModal = ({ show, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: 'Centrifugal',
    area: '',
    latitude: 34.0522,
    longitude: -118.2437,
    flowRate: '',
    offset: '',
    currentPressure: 0,
    minPressure: 0,
    maxPressure: 0,
    status: 'Operational'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: Number(value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add New Pump</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label>Pump Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                <Form.Select 
                  name="type" 
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="Centrifugal">Centrifugal</option>
                  <option value="Submersible">Submersible</option>
                  <option value="Diaphragm">Diaphragm</option>
                  <option value="Rotary">Rotary</option>
                  <option value="Peristaltic">Peristaltic</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Area/Block</Form.Label>
                <Form.Control
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Latitude</Form.Label>
                <Form.Control
                  type="number"
                  name="latitude"
                  value={formData.latitude}
                  onChange={handleNumberChange}
                  step="0.0001"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Longitude</Form.Label>
                <Form.Control
                  type="number"
                  name="longitude"
                  value={formData.longitude}
                  onChange={handleNumberChange}
                  step="0.0001"
                  required
                />
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label>Flow Rate</Form.Label>
                <Form.Control
                  type="text"
                  name="flowRate"
                  value={formData.flowRate}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Offset</Form.Label>
                <Form.Control
                  type="text"
                  name="offset"
                  value={formData.offset}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Current Pressure (PSI)</Form.Label>
                <Form.Control
                  type="number"
                  name="currentPressure"
                  value={formData.currentPressure}
                  onChange={handleNumberChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Min Pressure (PSI)</Form.Label>
                <Form.Control
                  type="number"
                  name="minPressure"
                  value={formData.minPressure}
                  onChange={handleNumberChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Max Pressure (PSI)</Form.Label>
                <Form.Control
                  type="number"
                  name="maxPressure"
                  value={formData.maxPressure}
                  onChange={handleNumberChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select 
                  name="status" 
                  value={formData.status}
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

          <div className="d-flex justify-content-end mt-4">
            <Button variant="secondary" onClick={onClose} className="me-2">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Add Pump
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddPumpModal;