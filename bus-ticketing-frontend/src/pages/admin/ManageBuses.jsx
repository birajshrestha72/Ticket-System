import React, { useState } from 'react';
import BusForm from './BusForm';
import '../../css/busManagement.css';

const sampleBuses = [
  { id: 1, busNo: 'BA 2 KHA 1234', vendor: 'ABC Travels', type: 'Deluxe', seats: 40 },
  { id: 2, busNo: 'GA 1 PA 5678', vendor: 'XYZ Bus', type: 'AC', seats: 30 },
];

const ManageBuses = () => {
  const [buses, setBuses] = useState(sampleBuses);
  const [editing, setEditing] = useState(null);

  const addBus = (bus) => {
    const id = buses.length ? Math.max(...buses.map(b => b.id)) + 1 : 1;
    setBuses([...buses, { ...bus, id }]);
  };

  const updateBus = (updated) => {
    setBuses(buses.map(b => (b.id === updated.id ? updated : b)));
    setEditing(null);
  };

  const removeBus = (id) => setBuses(buses.filter(b => b.id !== id));

  return (
    <div className="manage-buses">
      <h2>Manage Buses</h2>
      <div className="manage-section">
        <div className="list">
          <h3>Existing Buses</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Bus No</th>
                <th>Vendor</th>
                <th>Type</th>
                <th>Seats</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {buses.map(b => (
                <tr key={b.id}>
                  <td>{b.id}</td>
                  <td>{b.busNo}</td>
                  <td>{b.vendor}</td>
                  <td>{b.type}</td>
                  <td>{b.seats}</td>
                  <td>
                    <button onClick={() => setEditing(b)}>Edit</button>
                    <button onClick={() => removeBus(b.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="form">
          <h3>{editing ? 'Edit Bus' : 'Add New Bus'}</h3>
          <BusForm
            initial={editing}
            onSave={(data) => {
              if (editing) {
                updateBus({ ...editing, ...data });
              } else {
                addBus(data);
              }
            }}
          />
          {editing && <button onClick={() => setEditing(null)}>Cancel Edit</button>}
        </div>
      </div>
    </div>
  );
};

export default ManageBuses;
