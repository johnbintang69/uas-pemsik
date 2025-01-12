import { useSelector } from 'react-redux';

const DroughtMap = () => {
  const droughtData = useSelector((state) => state.droughtData.data);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Drought Map</h2>
      <div className="border p-4 mb-4">
        <p>Map visualization would go here. For now, here's a list of drought areas:</p>
        <ul>
          {droughtData.map((data) => (
            <li key={data.id}>
              {data.location}: {data.severity} severity (Date: {data.date})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DroughtMap;

