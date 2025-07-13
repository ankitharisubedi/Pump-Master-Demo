import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { 
  LineChart, Line, XAxis, YAxis, 
  CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

const PressureChart = ({ pressureData, currentPressure }) => {
  const [chartType, setChartType] = useState('line');

  return (
    <Card>
      <Card.Header className="bg-light">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Pressure Over Time</h5>
          <div>
            <Form.Select 
              size="sm" 
              style={{ width: '150px' }}
              value={chartType}
              onChange={(e) => setChartType(e.target.value)}
            >
              <option value="line">Line Chart</option>
              <option value="bar">Bar Chart</option>
              <option value="area">Area Chart</option>
            </Form.Select>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <h2 className="mb-0">{currentPressure} PSI</h2>
            <div className="text-success">
              Last 24 Hours <span className="fw-bold">+5%</span>
            </div>
          </div>
        </div>
        
        <div style={{ height: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={pressureData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="time" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                domain={['dataMin - 10', 'dataMax + 10']}
                tick={{ fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '8px', 
                  border: 'none', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
                }}
                formatter={(value) => [`${value} psi`, 'Pressure']}
                labelFormatter={(value) => `Time: ${value}`}
              />
              <Line 
                type="monotone" 
                dataKey="pressure" 
                stroke="#0ea5e9" 
                strokeWidth={3}
                dot={{ r: 4, fill: '#0ea5e9' }}
                activeDot={{ r: 6, stroke: '#fff', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PressureChart;