import React from 'react';
import '../../css/busManagement.css';

const BusManagement = () => (
  <div className="bus-management">
    <h2>Bus Management</h2>
    <div className="bus-crud-options">
      <a href="/add-bus" className="bus-btn">Add Bus</a>
      <a href="/update-bus" className="bus-btn">Update Bus</a>
      <a href="/remove-bus" className="bus-btn">Remove Bus</a>
      <a href="/view-buses" className="bus-btn">View Buses</a>
    </div>
    <div className="bus-service-options">
      <a href="/manage-seats" className="bus-btn">Manage Seats</a>
      <a href="/manage-routes" className="bus-btn">Manage Routes</a>
      <a href="/manage-bus-types" className="bus-btn">Manage Bus Types</a>
      <a href="/manage-fares" className="bus-btn">Manage Fares</a>
    </div>
  </div>
);

export default BusManagement;
