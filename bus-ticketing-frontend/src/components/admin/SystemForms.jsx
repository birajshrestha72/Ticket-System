import React, { useState, useEffect } from 'react';

export const RouteForm = ({ onSave, initial = null }) => {
  const [route, setRoute] = useState({ from: '', to: '', distance: '' });
  useEffect(() => { if (initial) setRoute(initial); }, [initial]);
  const handle = (e) => setRoute({ ...route, [e.target.name]: e.target.value });
  return (
    <form onSubmit={e => { e.preventDefault(); onSave(route); }} className="admin-form">
      <label>From:<br /><input name="from" value={route.from} onChange={handle} required /></label>
      <label>To:<br /><input name="to" value={route.to} onChange={handle} required /></label>
      <label>Distance (km):<br /><input name="distance" type="number" value={route.distance} onChange={handle} /></label>
      <button type="submit">Save Route</button>
    </form>
  );
};

export const BusTypeForm = ({ onSave, initial = null }) => {
  const [type, setType] = useState({ name: '' });
  useEffect(() => { if (initial) setType(initial); }, [initial]);
  return (
    <form onSubmit={e => { e.preventDefault(); onSave(type); }} className="admin-form">
      <label>Bus Type:<br /><input name="name" value={type.name} onChange={e => setType({ ...type, name: e.target.value })} required /></label>
      <button type="submit">Save Bus Type</button>
    </form>
  );
};

export const FareForm = ({ onSave, initial = null }) => {
  const [fare, setFare] = useState({ routeId: '', amount: '' });
  useEffect(() => { if (initial) setFare(initial); }, [initial]);
  return (
    <form onSubmit={e => { e.preventDefault(); onSave(fare); }} className="admin-form">
      <label>Route ID:<br /><input name="routeId" value={fare.routeId} onChange={e => setFare({ ...fare, routeId: e.target.value })} required /></label>
      <label>Amount:<br /><input name="amount" type="number" value={fare.amount} onChange={e => setFare({ ...fare, amount: e.target.value })} required /></label>
      <button type="submit">Save Fare</button>
    </form>
  );
};

export const CityForm = ({ onSave, initial = null }) => {
  const [city, setCity] = useState({ name: '' });
  useEffect(() => { if (initial) setCity(initial); }, [initial]);
  return (
    <form onSubmit={e => { e.preventDefault(); onSave(city); }} className="admin-form">
      <label>City Name:<br /><input name="name" value={city.name} onChange={e => setCity({ ...city, name: e.target.value })} required /></label>
      <button type="submit">Save City</button>
    </form>
  );
};
