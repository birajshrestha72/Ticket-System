import React, { useState } from 'react';
import '../../css/busSearch.css';

const cities = ['Kathmandu', 'Pokhara', 'Biratnagar', 'Chitwan', 'Butwal'];
const vendors = ['ABC Travels', 'XYZ Bus', 'Nepal Yatayat'];
const busTypes = ['Deluxe', 'Standard', 'AC', 'Non-AC'];

// Dummy bus data
const busResults = [
  { id: 1, vendor: 'ABC Travels', busNo: 'BA 2 KHA 1234', type: 'Deluxe', from: 'Kathmandu', to: 'Pokhara', seats: 10, time: '07:00', fare: 1200 },
  { id: 2, vendor: 'XYZ Bus', busNo: 'GA 1 PA 5678', type: 'AC', from: 'Kathmandu', to: 'Chitwan', seats: 5, time: '09:00', fare: 1000 },
  { id: 3, vendor: 'Nepal Yatayat', busNo: 'LU 3 KA 4321', type: 'Standard', from: 'Pokhara', to: 'Biratnagar', seats: 8, time: '06:30', fare: 1500 },
];

const BusSearch = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [vendor, setVendor] = useState('');
  const [busType, setBusType] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Filter dummy data
    let filtered = busResults.filter(bus => {
      return (
        (!from || bus.from === from) &&
        (!to || bus.to === to) &&
        (!vendor || bus.vendor === vendor) &&
        (!busType || bus.type === busType)
      );
    });
    setResults(filtered);
  };

  return (
    <div className="bus-search">
      <h2 className="search-title">Search Buses</h2>
      <form className="search-form" onSubmit={handleSearch}>
        <label>From:
          <select value={from} onChange={e => setFrom(e.target.value)} required>
            <option value="">Select City</option>
            {cities.map(city => <option key={city} value={city}>{city}</option>)}
          </select>
        </label>
        <label>To:
          <select value={to} onChange={e => setTo(e.target.value)} required>
            <option value="">Select City</option>
            {cities.map(city => <option key={city} value={city}>{city}</option>)}
          </select>
        </label>
        <label>Date:
          <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
        </label>
        <label>Vendor:
          <select value={vendor} onChange={e => setVendor(e.target.value)}>
            <option value="">All Vendors</option>
            {vendors.map(v => <option key={v} value={v}>{v}</option>)}
          </select>
        </label>
        <label>Bus Type:
          <select value={busType} onChange={e => setBusType(e.target.value)}>
            <option value="">All Types</option>
            {busTypes.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
        </label>
        <button type="submit" className="search-btn">Search Buses</button>
      </form>
      <div className="search-results">
        <h3>Results</h3>
        {results.length === 0 ? (
          <p>No buses found. Please adjust your search.</p>
        ) : (
          <table className="results-table">
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Bus No</th>
                <th>Type</th>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Seats</th>
                <th>Fare</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {results.map(bus => (
                <tr key={bus.id}>
                  <td>{bus.vendor}</td>
                  <td>{bus.busNo}</td>
                  <td>{bus.type}</td>
                  <td>{bus.from}</td>
                  <td>{bus.to}</td>
                  <td>{bus.time}</td>
                  <td>{bus.seats}</td>
                  <td>Rs. {bus.fare}</td>
                  <td><a href={`/booking?busId=${bus.id}`}>Book</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default BusSearch;
