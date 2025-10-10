import React from 'react';
import '../../css/customerDashboard.css';

const CustomerDashboard = () => {
  return (
    <div className="customer-dashboard">
      <h2 className="dashboard-title">Welcome to Your Dashboard</h2>
      <div className="dashboard-options">
        <a href="/search" className="dashboard-btn">Search Buses</a>
        <a href="/bookings" className="dashboard-btn">My Bookings</a>
        <a href="/payment" className="dashboard-btn">Payments</a>
        <a href="/notifications" className="dashboard-btn">Notifications</a>
        <a href="/review" className="dashboard-btn">Review Experience</a>
      </div>
    </div>
  );
};

export default CustomerDashboard;
