import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import FaBars
import { NavLink } from 'react-router-dom';

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: isOpen ? '300px' : '50px' }} className="sidebar">
        <div className="top_section">
          {isOpen ? (
            <h1 className="logo">
              Foodie app
            </h1>
          ) : (
            <div className="bars">
              <FaBars onClick={toggleSidebar} />
            </div>
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <NavLink to="/foods" className="link" activeClassName="active">
            <div className="icon" style={{ textAlign: 'center', fontSize: '3rem' }}>
              🍔
            </div>
            <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
              Menu
            </div>
          </NavLink>
          <NavLink to="/cart" className="link" activeClassName="active">
            <div className="icon" style={{ textAlign: 'center', fontSize: '3rem' }}>
              🛒
            </div>
            <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
              Orders
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
