import DropdownMenu from './DropdownMenu';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by checking if a cookie named 'accessToken' exists
    const userLoggedIn = Cookies.get('accessToken');
    setIsLoggedIn(!!userLoggedIn); // Set the login state based on the existence of the cookie
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold mr-4">My Application</h1>
        </div>
        
        <div className="flex items-center">
          {/* Display the login link only if the user is not logged in */}
          {!isLoggedIn && (
            <Link href="/login" className="text-xl font-bold mr-4 transition duration-300 ease-in-out transform hover:scale-110">
              Login
            </Link>
          )}

          <div className="relative">
            <label htmlFor="dropdown-toggle" className="btn btn-circle swap swap-rotate">
              <input type="checkbox" id="dropdown-toggle" className="hidden" />
              <svg 
                className="swap-off fill-current" 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 512 512" 
                onClick={toggleDropdown}
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/>
              </svg>
              <svg 
                className="swap-on fill-current" 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                viewBox="0 0 512 512" 
                onClick={toggleDropdown}
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/>
              </svg>
            </label>
            {isDropdownOpen && (
              <DropdownMenu />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
