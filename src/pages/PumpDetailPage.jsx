import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import PumpHeader from '../components/PumpDetails/PumpHeader.component';
import PumpAttributes from '../components/PumpDetails/PumpAttribute.component';
import PumpMap from '../components/PumpDetails/PumpMap.component';
import PressureChart from '../components/PumpDetails/PressureChart.component';
import pumps from '../data/pumps';
import CustomNavbar from '../components/Navbar/Navbar.component';

const PumpDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pump, setPump] = useState(null);
  
  // Mock pressure data for the chart
  const pressureData = [
    { time: '00:00', pressure: 120 },
    { time: '03:00', pressure: 135 },
    { time: '06:00', pressure: 150 },
    { time: '09:00', pressure: 145 },
    { time: '12:00', pressure: 155 },
    { time: '15:00', pressure: 160 },
    { time: '18:00', pressure: 145 },
    { time: '21:00', pressure: 140 },
  ];

  useEffect(() => {
    const foundPump = pumps.find(p => p.id === parseInt(id));
    if (!foundPump) {
      navigate('/pumps'); // Redirect if pump not found
    } else {
      setPump(foundPump);
    }
  }, [id, navigate]);

  if (!pump) return <div>Loading...</div>;

  return (
    <div>
        <CustomNavbar/>
            <Container className="mt-4">
            <PumpHeader 
                name={pump.name} 
                id={pump.id} 
                status={pump.status} 
                lastUpdated={pump.lastUpdated || "2024-01-20 14:30"} 
            />
            
            <Row className="mt-4">
                <Col md={6}>
                <PumpAttributes 
                    type={pump.type}
                    area={pump.area}
                    latitude={pump.latitude}
                    longitude={pump.longitude}
                    flowRate={pump.flowRate}
                    offset={pump.offset}
                    currentPressure={pump.currentPressure}
                    minPressure={pump.minPressure}
                    maxPressure={pump.maxPressure}
                />
                </Col>
                <Col md={6}>
                <PumpMap 
                    pumps={pumps} 
                    currentPump={pump} 
                />
                </Col>
            </Row>
            
            <Row className="mt-4">
                <Col>
                <PressureChart 
                    pressureData={pressureData} 
                    currentPressure={pump.currentPressure} 
                />
                </Col>
            </Row>
            </Container>
        </div>
  );
};

export default PumpDetailPage;