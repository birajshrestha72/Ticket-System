import React from 'react';

const VendorManagement = () => (
  <div className="vendor-management">
    <h2>Vendor Management</h2>
    <div className="vendor-crud-options">
      <a href="/add-vendor" className="vendor-btn">Add Vendor</a>
      <a href="/update-vendor" className="vendor-btn">Update Vendor</a>
      <a href="/remove-vendor" className="vendor-btn">Remove Vendor</a>
      <a href="/view-vendors" className="vendor-btn">View Vendors</a>
    </div>
    <div className="vendor-service-options">
      <a href="/vendor-buses" className="vendor-btn">Manage Vendor Buses</a>
      <a href="/vendor-billings" className="vendor-btn">View Billings</a>
      <a href="/vendor-transactions" className="vendor-btn">Check Transactions</a>
      <a href="/vendor-reviews" className="vendor-btn">Ratings & Reviews</a>
    </div>
  </div>
);

export default VendorManagement;
