import { useState } from 'react';

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [newReport, setNewReport] = useState({ title: '', content: '', date: '' });

  const handleInputChange = (e) => {
    setNewReport({ ...newReport, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReports([...reports, { ...newReport, id: Date.now() }]);
    setNewReport({ title: '', content: '', date: '' });
  };

  const handleDelete = (id) => {
    setReports(reports.filter(report => report.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Reports</h2>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          name="title"
          placeholder="Report Title"
          value={newReport.title}
          onChange={handleInputChange}
          className="mr-2 p-2 border rounded"
          required
        />
        <input
          type="date"
          name="date"
          value={newReport.date}
          onChange={handleInputChange}
          className="mr-2 p-2 border rounded"
          required
        />
        <textarea
          name="content"
          placeholder="Report Content"
          value={newReport.content}
          onChange={handleInputChange}
          className="mr-2 p-2 border rounded w-full"
          required
        ></textarea>
        <button type="submit" className="bg-black text-white p-2 rounded mt-2">
          Add Report
        </button>
      </form>

      <div className="space-y-4">
        {reports.map((report) => (
          <div key={report.id} className="border p-4 rounded">
            <h3 className="text-xl font-bold">{report.title}</h3>
            <p className="text-sm text-gray-500">{report.date}</p>
            <p className="mt-2">{report.content}</p>
            <button onClick={() => handleDelete(report.id)} className="bg-red-500 text-white p-1 rounded mt-2">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;

