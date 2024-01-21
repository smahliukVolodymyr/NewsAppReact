import React, { useState } from "react";
import "./Navbar.css";
import { TfiMenuAlt } from "react-icons/tfi";
import { RiCloseLine } from "react-icons/ri";
function Navbar({ setSearchDays, setPopularity }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <p>
          News <span>Update</span>
        </p>
      </div>

      {isOpen ? (
        <RiCloseLine className="icon" onClick={() => setIsOpen(false)} />
      ) : (
        <TfiMenuAlt className="icon" onClick={() => setIsOpen(true)} />
      )}
      {isOpen && (
        <div className="links-container">
          <div className="popularity-container">
            <h3>Featured Articles: </h3>
            <ul>
              <li
                onClick={() => {
                  setPopularity("viewed");
                  setIsOpen(false);
                }}
              >
                Most viewed
              </li>
              <li
                onClick={() => {
                  setPopularity("emailed");
                  setIsOpen(false);
                }}
              >
                Most emailed
              </li>
              <li
                onClick={() => {
                  setPopularity("shared");
                  setIsOpen(false);
                }}
              >
                Most shared
              </li>
            </ul>
          </div>
          <div className="filter-container">
            <h3>Sort articles by popularity:</h3>
            <ul>
              <li
                onClick={() => {
                  setSearchDays(1);
                  setIsOpen(false);
                }}
              >
                1 day
              </li>
              <li
                onClick={() => {
                  setSearchDays(7);
                  setIsOpen(false);
                }}
              >
                7 days
              </li>
              <li
                onClick={() => {
                  setSearchDays(30);
                  setIsOpen(false);
                }}
              >
                30 days
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
