import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addDroughtData, updateDroughtData, deleteDroughtData, fetchDroughtData } from '../redux/droughtDataSlice';

const Dashboard = () => {
  const [newData, setNewData] = useState({ location: '', severity: '', date: '' });
  const [editingId, setEditingId] = useState(null);
  const dispatch = useDispatch();
  const { data: droughtData, status, error } = useSelector((state) => state.droughtData);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(fetchDroughtData());
  }, [dispatch]);

  const handleInputChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      dispatch(updateDroughtData({ id: editingId, ...newData }));
      setEditingId(null);
    } else {
      dispatch(addDroughtData(newData));
    }
    setNewData({ location: '', severity: '', date: '' });
  };

  const handleEdit = (data) => {
    setNewData(data);
    setEditingId(data.id);
  };

  const handleDelete = (id) => {
    dispatch(deleteDroughtData(id));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard, {user?.email}!</h2>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newData.location}
          onChange={handleInputChange}
          className="mr-2 p-2 border rounded"
          required
        />
        <select
          name="severity"
          value={newData.severity}
          onChange={handleInputChange}
          className="mr-2 p-2 border rounded"
          required
        >
          <option value="">Select Severity</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input
          type="date"
          name="date"
          value={newData.date}
          onChange={handleInputChange}
          className="mr-2 p-2 border rounded"
          required
        />
        <button type="submit" className="bg-black text-white p-2 rounded">
          {editingId ? 'Update' : 'Add'} Drought Data
        </button>
      </form>

      <table className="w-full">
        <thead>
          <tr>
            <th>Location</th>
            <th>Severity</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {droughtData.map((data) => (
            <tr key={data.id}>
              <td>{data.location}</td>
              <td>{data.severity}</td>
              <td>{data.date}</td>
              <td>
                <button onClick={() => handleEdit(data)} className="mr-2 bg-blue-500 text-white p-1 rounded">Edit</button>
                <button onClick={() => handleDelete(data.id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

