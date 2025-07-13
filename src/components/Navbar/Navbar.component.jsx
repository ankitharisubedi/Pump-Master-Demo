import React, { useState } from 'react';
import { Navbar, Nav, Form, InputGroup, Button, Dropdown } from 'react-bootstrap';
import { Bell, Search, PersonCircle, ChevronDown } from 'react-bootstrap-icons';

const CustomNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm mb-4">
      <div className="container-fluid">
        {/* Brand/Logo */}
        <Navbar.Brand href="/" className="fw-bold text-primary">
          PumpMaster
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Main Navigation */}
          <Nav className="me-auto">
            <Nav.Link href="/" className="mx-2 active">Dashboard</Nav.Link>
            <Nav.Link href="/pumps" className="mx-2">Pumps</Nav.Link>
            <Nav.Link href="/reports" className="mx-2">Reports</Nav.Link>
            <Nav.Link href="/alerts" className="mx-2">Alerts</Nav.Link>
          </Nav>
          
          {/* Search Bar */}
          <Form className="d-flex me-3">
            <InputGroup>
              <InputGroup.Text>
                <Search />
              </InputGroup.Text>
              <Form.Control
                type="search"
                placeholder="Search pumps..."
                className="border-start-0"
              />
            </InputGroup>
          </Form>
          
          {/* Right-side Icons */}
          <div className="d-flex align-items-center">
            <Button variant="light" className="position-relative me-2">
              <Bell size={20} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
              </span>
            </Button>
            
            {/* Profile Dropdown */}
            <Dropdown show={showDropdown} onToggle={(isOpen) => setShowDropdown(isOpen)}>
              <Dropdown.Toggle 
                variant="light" 
                as={Button}
                className="d-flex align-items-center"
              >
                <PersonCircle size={20} className="me-2" />
                <span>Admin</span>
                <ChevronDown size={16} className="ms-1" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
                <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default CustomNavbar;