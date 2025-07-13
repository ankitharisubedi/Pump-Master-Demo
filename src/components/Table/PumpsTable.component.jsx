import React from 'react';
import { Table, ProgressBar, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const PumpsTable = ({ pumps, onEdit, onDelete }) => {
    const navigate = useNavigate();
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Area/Block</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Flow Rate</th>
          <th>Offset</th>
          <th>Pressure (PSI)</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {pumps.map(pump => (
          <tr key={pump.id} >
            <td style={{ cursor: 'pointer' }}
            onClick={() => navigate(`/pump/${pump.id}`)}>{pump.name}</td>
            <td>{pump.type}</td>
            <td>{pump.area}</td>
            <td>{pump.latitude}</td>
            <td>{pump.longitude}</td>
            <td>{pump.flowRate}</td>
            <td>{pump.offset}</td>
            <td>
              <ProgressBar 
                now={((pump.currentPressure - pump.minPressure) / 
                     (pump.maxPressure - pump.minPressure)) * 100}
                label={`${pump.currentPressure}`}
                variant={
                  pump.currentPressure > pump.maxPressure * 0.9 ? 'danger' :
                  pump.currentPressure < pump.minPressure * 1.1 ? 'warning' : 'success'
                }
              />
              <small className="text-muted">
                ({pump.minPressure}-{pump.maxPressure})
              </small>
            </td>
            <td>
              <Badge 
                bg={
                  pump.status === 'Operational' ? 'success' :
                  pump.status === 'Maintenance' ? 'warning' : 'danger'
                }
              >
                {pump.status}
              </Badge>
            </td>
            <td>
              <button 
                className="btn btn-sm btn-outline-primary me-2"
                onClick={() => onEdit(pump)}
              >
                Edit
              </button>
              <button 
                className="btn btn-sm btn-outline-danger"
                onClick={() => onDelete(pump)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PumpsTable;