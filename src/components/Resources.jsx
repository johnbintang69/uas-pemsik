import { useState } from 'react';

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [newResource, setNewResource] = useState({ name: '', type: '', quantity: '' });

  const handleInputChange = (e) => {
    setNewResource({ ...newResource, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResources([...resources, { ...newResource, id: Date.now() }]);
    setNewResource({ name: '', type: '', quantity: '' });
  };

  const handleDelete = (id) => {
    setResources(resources.filter(resource => resource.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Resources</h2>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          name="name"
          placeholder="Resource Name"
          value={newResource.name}
          onChange={handleInputChange}
          className="mr-2 p-2 border rounded"
          required
        />
        <input
          type="text"
          name="type"
          placeholder="Resource Type"
          value={newResource.type}
          onChange={handleInputChange}
          className="mr-2 p-2 border rounded"
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newResource.quantity}
          onChange={handleInputChange}
          className="mr-2 p-2 border rounded"
          required
        />
        <button type="submit" className="bg-black text-white p-2 rounded">
          Add Resource
        </button>
      </form>

      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((resource) => (
            <tr key={resource.id}>
              <td>{resource.name}</td>
              <td>{resource.type}</td>
              <td>{resource.quantity}</td>
              <td>
                <button onClick={() => handleDelete(resource.id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Resources;

