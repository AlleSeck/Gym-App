'use client'
import React, { useState, Suspense } from 'react';
import DropdownMenu from './DropdownMenu';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log(isDropdownOpen);
  };


  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Mon Application</h1>
        <div className="relative">
          <label htmlFor="dropdown-toggle" className="btn btn-circle swap swap-rotate">
            <input type="checkbox" id="dropdown-toggle" className="hidden" />
            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512" onClick={toggleDropdown}><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512" onClick={toggleDropdown}><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
          </label>
          {isDropdownOpen && (
              <DropdownMenu />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
