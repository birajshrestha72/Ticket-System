import React, { useState } from 'react';

const VendorDashboard = () => {
  const [stats] = useState({ totalBuses: 5, totalBookings: 120, revenue: 56000, avgRating: 4.3 });

  return (
    <div className="vendor-dashboard">
      <h2>Vendor Dashboard</h2>
      <div className="stats">
        <div className="stat-card">Buses: <strong>{stats.totalBuses}</strong></div>
        <div className="stat-card">Bookings: <strong>{stats.totalBookings}</strong></div>
        <div className="stat-card">Revenue: <strong>Rs. {stats.revenue}</strong></div>
        <div className="stat-card">Avg Rating: <strong>{stats.avgRating}</strong></div>
      </div>

      <div className="vendor-options">
        <a href="/vendor/bus-seat-management" className="vendor-btn">Manage Seats</a>
        <a href="/vendor/billing" className="vendor-btn">Billing</a>
        <a href="/vendor/transactions" className="vendor-btn">Transactions</a>
        <a href="/vendor/ratings-reviews" className="vendor-btn">Ratings & Reviews</a>
      </div>
    </div>
  );
};

export default VendorDashboard;
