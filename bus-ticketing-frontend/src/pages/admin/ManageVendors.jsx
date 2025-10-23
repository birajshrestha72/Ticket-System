import React, { useState } from 'react';
import VendorForm from './VendorForm';
import '../../css/vendorManagement.css';

const sampleVendors = [
  { id: 1, name: 'ABC Travels', phone: '9800000000', email: 'abc@travels.com' },
  { id: 2, name: 'XYZ Bus', phone: '9811111111', email: 'xyz@bus.com' },
];

const ManageVendors = () => {
  const [vendors, setVendors] = useState(sampleVendors);
  const [editing, setEditing] = useState(null);

  const addVendor = (vendor) => {
    const id = vendors.length ? Math.max(...vendors.map(v => v.id)) + 1 : 1;
    setVendors([...vendors, { ...vendor, id }]);
  };

  const updateVendor = (vendor) => {
    setVendors(vendors.map(v => (v.id === vendor.id ? vendor : v)));
    setEditing(null);
  };

  const removeVendor = (id) => setVendors(vendors.filter(v => v.id !== id));

  return (
    <div className="manage-vendors">
      <h2>Manage Vendors</h2>
      <div className="manage-section">
        <div className="list">
          <h3>Existing Vendors</h3>
          <table>
            <thead>
              <tr><th>ID</th><th>Name</th><th>Phone</th><th>Email</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {vendors.map(v => (
                <tr key={v.id}>
                  <td>{v.id}</td>
                  <td>{v.name}</td>
                  <td>{v.phone}</td>
                  <td>{v.email}</td>
                  <td>
                    <button onClick={() => setEditing(v)}>Edit</button>
                    <button onClick={() => removeVendor(v.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="form">
          <h3>{editing ? 'Edit Vendor' : 'Add New Vendor'}</h3>
          <VendorForm onSave={vendor => editing ? updateVendor({ ...editing, ...vendor }) : addVendor(vendor)} initial={editing} />
        </div>
      </div>
    </div>
  );
};

export default ManageVendors;
