import { Link, useNavigate } from 'react-router-dom';

import './navbarstyles.css'; // Import the CSS file

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="navbar">
      <h2 className="text-base font-bold">TMDB Movies Database</h2>
      <div className="flex flex-row font-bold gap-10">
        <Link to="/">Home</Link>
        <Link to="/myprofile">My Profile</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/tv-shows">Tv Shows</Link>
        <Link to="/myfavoritetv">My Favorite Show</Link>
        <button className="flex flex-row font-bold gap-10" onClick={handleLogout}>
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Navbar