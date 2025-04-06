import React from 'react';

export default function SupplierTable({ data }) {
  if (!data.length) return <p>No supplier data loaded yet.</p>;

  return (
    <table className="table-auto w-full border mt-4">
      <thead>
        <tr>
          <th className="border px-2">Name</th>
          <th className="border px-2">Country</th>
          <th className="border px-2">Product Type</th>
          <th className="border px-2">Facility Type</th>
          <th className="border px-2">Risk Score (Demo)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((supplier, idx) => (
          <tr key={idx}>
            <td className="border px-2">{supplier['Name']}</td>
            <td className="border px-2">{supplier['Country']}</td>
            <td className="border px-2">{supplier['Product Type']}</td>
            <td className="border px-2">{supplier['Facility Type']}</td>
            <td className="border px-2">{calculateRisk(supplier)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function calculateRisk(supplier) {
  // Dummy logic
  const riskyCountries = ['China', 'Russia'];
  const score = riskyCountries.includes(supplier['Country']) ? 'High' : 'Low';
  return score;
}

// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);