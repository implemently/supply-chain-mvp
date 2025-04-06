import React from 'react';

export default function UploadCSV({ onUpload, onLoadSample }) {
  return (
    <div className="mb-4 space-x-4">
      <input
        type="file"
        accept=".csv"
        onChange={(e) => onUpload(e.target.files[0])}
        className="border p-2"
      />
      <button
        onClick={onLoadSample}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Load Sample Data
      </button>
    </div>
  );
}