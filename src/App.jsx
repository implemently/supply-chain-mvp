import React, { useState } from 'react';
import UploadCSV from './components/UploadCSV';
import SupplierTable from './components/SupplierTable';
import Papa from 'papaparse';
import sampleData from '../data/sample_suppliers.csv?raw';

export default function App() {
  const [suppliers, setSuppliers] = useState([]);

  const handleFileUpload = (file) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => setSuppliers(results.data),
    });
  };

  const loadSampleData = () => {
    Papa.parse(sampleData, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => setSuppliers(results.data),
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Supply Chain Risk Analyzer</h1>
      <UploadCSV onUpload={handleFileUpload} onLoadSample={loadSampleData} />
      <SupplierTable data={suppliers} />
    </div>
  );
}

