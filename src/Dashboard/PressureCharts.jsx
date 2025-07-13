import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PressureChart = ({ data }) => {
  return (
    <div className="border p-3 rounded" style={{ height: '300px' }}>
      <h6>Pressure Over Time (PSI)</h6>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip 
            formatter={(value) => [`${value} psi`, 'Pressure']}
            labelFormatter={(value) => `Time: ${value}`}
          />
          <Line 
            type="monotone" 
            dataKey="pressure" 
            stroke="#8884d8" 
            activeDot={{ r: 8 }} 
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PressureChart;