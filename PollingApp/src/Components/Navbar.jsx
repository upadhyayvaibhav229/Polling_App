import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const name = localStorage.getItem("PollUserName");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear('PollUserName');
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <svg
                className="h-6 w-auto text-white"
                viewBox="0 0 482 74"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Paths (shortened for brevity) */}
                <title>StrawPoll</title>
                <path fill="currentColor" d="M106.67 72.38c..." />
              </svg>
            </Link>
          </div>

          {/* Hamburger for mobile */}
          <div className="md:hidden flex items-center">
            {name && (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            )}
          </div>

          {/* Desktop Menu */}
          {name && (
            <div className="hidden md:flex space-x-6 items-center">
              <Link to="/create-poll" className="hover:text-gray-300">
                Create Poll
              </Link>
              <Link to="/dashboard" className="hover:text-gray-300">
                My Polls
              </Link>
              <Link to="/explore" className="hover:text-gray-300">
                Explore Polls
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-1.5 rounded text-white"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && name && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/create-poll" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>
            Create Poll
          </Link>
          <Link to="/dashboard" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>
            My Polls
          </Link>
          <Link to="/explore" className="block hover:text-gray-300" onClick={() => setMenuOpen(false)}>
            Explore Polls
          </Link>
          <button
            onClick={() => {
              setMenuOpen(false);
              handleLogout();
            }}
            className="w-full text-left text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
