import React from 'react';
import { Card } from 'react-bootstrap';

const PumpAttributes = ({ 
  type, 
  area, 
  latitude, 
  longitude, 
  flowRate, 
  offset, 
  currentPressure,
  minPressure,
  maxPressure
}) => {
  return (
    <Card className="h-100">
      <Card.Header className="bg-light">
        <h5 className="mb-0">Attributes</h5>
      </Card.Header>
      <Card.Body>
        <div className="mb-3">
          <div className="text-muted small">Type</div>
          <div className="fw-bold">{type}</div>
        </div>
        
        <div className="mb-3">
          <div className="text-muted small">Area/Block</div>
          <div className="fw-bold">{area}</div>
        </div>
        
        <div className="mb-3">
          <div className="text-muted small">Location (lat/lon)</div>
          <div className="fw-bold">{latitude.toFixed(4)}° N, {longitude.toFixed(4)}° W</div>
        </div>
        
        <div className="mb-3">
          <div className="text-muted small">Flow Rate</div>
          <div className="fw-bold">{flowRate}</div>
        </div>
        
        <div className="mb-3">
          <div className="text-muted small">Offset</div>
          <div className="fw-bold">{offset}</div>
        </div>
        
        <div className="mb-3">
          <div className="text-muted small">Pressure</div>
          <div className="fw-bold">
            <span className="text-primary">{currentPressure} psi</span> | 
            <span className="text-danger"> {minPressure} psi</span> | 
            <span className="text-success"> {maxPressure} psi</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PumpAttributes;