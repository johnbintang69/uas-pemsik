import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">App Laporan Bencana Kekeringan</h1>
        <nav>
          <Link to="/about" className="mr-4">About</Link>
          <Link to="/dashboard" className="mr-4">Dashboard</Link>
          <Link to="/drought-map" className="mr-4">Drought Map</Link>
          <Link to="/weather-data" className="mr-4">Weather Data</Link>
          <Link to="/resources" className="mr-4">Resources</Link>
          <Link to="/reports" className="mr-4">Reports</Link>
          <button onClick={handleLogout} className="bg-white text-black px-4 py-2 rounded">Logout</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

