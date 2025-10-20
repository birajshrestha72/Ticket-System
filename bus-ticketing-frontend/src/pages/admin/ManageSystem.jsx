import React, { useState } from 'react';
import { RouteForm, BusTypeForm, FareForm, CityForm } from '../../components/admin/SystemForms';

const ManageSystem = () => {
  const [routes, setRoutes] = useState([]);
  const [busTypes, setBusTypes] = useState([]);
  const [fares, setFares] = useState([]);
  const [cities, setCities] = useState([]);

  const addRoute = (r) => setRoutes([...routes, { ...r, id: Date.now() }]);
  const addBusType = (t) => setBusTypes([...busTypes, { ...t, id: Date.now() }]);
  const addFare = (f) => setFares([...fares, { ...f, id: Date.now() }]);
  const addCity = (c) => setCities([...cities, { ...c, id: Date.now() }]);

  const remove = (listSetter, list, id) => listSetter(list.filter(i => i.id !== id));

  return (
    <div className="manage-system">
      <h2>System Management</h2>
      <div className="manage-section">
        <div className="subsection">
          <h3>Routes</h3>
          <RouteForm onSave={addRoute} />
          <ul>
            {routes.map(r => (
              <li key={r.id}>
                {r.from} &rarr; {r.to} ({r.distance} km)
                <button onClick={() => remove(setRoutes, routes, r.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="subsection">
          <h3>Bus Types</h3>
          <BusTypeForm onSave={addBusType} />
          <ul>
            {busTypes.map(t => (
              <li key={t.id}>
                {t.name}
                <button onClick={() => remove(setBusTypes, busTypes, t.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="subsection">
          <h3>Fares</h3>
          <FareForm onSave={addFare} />
          <ul>
            {fares.map(f => (
              <li key={f.id}>
                Route: {f.routeId} - Rs. {f.amount}
                <button onClick={() => remove(setFares, fares, f.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="subsection">
          <h3>Cities</h3>
          <CityForm onSave={addCity} />
          <ul>
            {cities.map(c => (
              <li key={c.id}>
                {c.name}
                <button onClick={() => remove(setCities, cities, c.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManageSystem;
