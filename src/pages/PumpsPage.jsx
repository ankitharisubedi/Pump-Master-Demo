import React, { useState } from 'react';
import { Container, Button, Navbar } from 'react-bootstrap';
import PumpsTable from '../components/Table/PumpsTable.component';
import EditPumpModal from '../components/Modal/EditPump.component';
import DeletePumpModal from '../components/Modal/DeletePump.component';
import pumps from '../data/pumps';
import CustomNavbar from '../components/Navbar/Navbar.component';
import AddPumpModal from '../components/Modal/AddPump.component';
import { addNewPump } from '../data/pumps'; 

const PumpsPage = () => {
  const [pumpData, setPumpData] = useState(pumps);
  const [editingPump, setEditingPump] = useState(null);
  const [deletingPump, setDeletingPump] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleSave = (updatedPump) => {
    setPumpData(pumpData.map(p => 
      p.id === updatedPump.id ? updatedPump : p
    ));
  };

  const handleDelete = () => {
    setPumpData(pumpData.filter(p => p.id !== deletingPump.id));
  };

   const handleAddPump = (newPump) => {
    const addedPump = addNewPump(newPump);
    setPumpData([...pumpData, addedPump]);
  };

  return (
    <div>
        <CustomNavbar />
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Pump Management</h1>
        <Button variant="primary" onClick={() => setShowAddModal(true)}>
          Add New Pump
        </Button>
      </div>

      <PumpsTable 
        pumps={pumpData} 
        onEdit={(pump) => {
          setEditingPump(pump);
          setShowEditModal(true);
        }}
        onDelete={(pump) => {
          setDeletingPump(pump);
          setShowDeleteModal(true);
        }}
      />

      <EditPumpModal
        show={showEditModal}
        pump={editingPump}
        onSave={handleSave}
        onClose={() => setShowEditModal(false)}
      />

      <DeletePumpModal
        show={showDeleteModal}
        pump={deletingPump}
        onDelete={handleDelete}
        onClose={() => setShowDeleteModal(false)}
      />

       <AddPumpModal
        show={showAddModal}
        onSave={handleAddPump}
        onClose={() => setShowAddModal(false)}
      />
    </Container>
    </div>
  );
};

export default PumpsPage;