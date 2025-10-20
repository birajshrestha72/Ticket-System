import React from 'react';
import '../../css/adminDashboard.css';

const AdminDashboard = () => (
  <div className="admin-dashboard">
    <h2>Admin Dashboard</h2>
    <div className="admin-options">
      <a href="/admin/manage-buses" className="admin-btn">Manage Buses</a>
      <a href="/admin/manage-vendors" className="admin-btn">Manage Vendors</a>
      <a href="/admin/manage-system" className="admin-btn">System Management</a>
      <a href="/admin/bus-management" className="admin-btn">Bus Services</a>
    </div>
  </div>
);

export default AdminDashboard;
