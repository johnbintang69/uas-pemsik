import { useState } from 'react';

const WeatherData = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [newWeatherData, setNewWeatherData] = useState({ date: '', temperature: '', rainfall: '' });

  const handleInputChange = (e) => {
    setNewWeatherData({ ...newWeatherData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWeatherData([...weatherData, { ...newWeatherData, id: Date.now() }]);
    setNewWeatherData({ date: '', temperature: '', rainfall: '' });
  };

  const handleDelete = (id) => {
    setWeatherData(weatherData.filter(data => data.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Weather Data</h2>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="date"
          name="date"
          value={newWeatherData.date}
          onChange={handleInputChange}
          className="mr-2 p-2 border rounded"
          required
        />
        <input
          type="number"
          name="temperature"
          placeholder="Temperature (°C)"
          value={newWeatherData.temperature}
          onChange={handleInputChange}
          className="mr-2 p-2 border rounded"
          required
        />
        <input
          type="number"
          name="rainfall"
          placeholder="Rainfall (mm)"
          value={newWeatherData.rainfall}
          onChange={handleInputChange}
          className="mr-2 p-2 border rounded"
          required
        />
        <button type="submit" className="bg-black text-white p-2 rounded">
          Add Weather Data
        </button>
      </form>

      <table className="w-full">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature (°C)</th>
            <th>Rainfall (mm)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {weatherData.map((data) => (
            <tr key={data.id}>
              <td>{data.date}</td>
              <td>{data.temperature}</td>
              <td>{data.rainfall}</td>
              <td>
                <button onClick={() => handleDelete(data.id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherData;

