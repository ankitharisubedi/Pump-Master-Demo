import React from 'react';
import { Badge } from 'react-bootstrap';

const PumpHeader = ({ name, id, status, lastUpdated }) => {
  const getStatusVariant = () => {
    switch(status) {
      case 'Operational': return 'success';
      case 'Maintenance': return 'warning';
      case 'Offline': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
      <div>
        <h1 className="mb-0">{name}</h1>
        <div className="text-muted mt-1">Detailed Pump View</div>
      </div>
      
      <div className="text-end">
        <div className="d-flex align-items-center">
          <div className="me-4">
            <div className="text-muted small">Pump ID</div>
            <div className="fw-bold">{id}</div>
          </div>
          
          <div className="me-4">
            <div className="text-muted small">Status</div>
            <Badge bg={getStatusVariant()} className="fs-6">
              {status}
            </Badge>
          </div>
          
          <div>
            <div className="text-muted small">Last Updated</div>
            <div className="fw-bold">{lastUpdated}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PumpHeader;