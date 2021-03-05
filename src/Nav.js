import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(true);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      // if we scrolled full screen to the bottom then handleshow becomes true
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar); // When there will be scroll event transitionNavBar function will be triggered
    // Clean up funtion
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    // basically it means if show is true only then render nav__black
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://lh3.googleusercontent.com/proxy/46_4ORAQaTlEkUxBIEOgY3Zu2OFYkKmJAzr5tXtTAuwuuRFub0WRRWneZgQToXp5IDNV1lXyVFhnBpWkCLf7apjBIPLWmmenk4Y_4MXcS65QIQLZ_a8"
        />

        <img
          className="nav__avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRATID53Rg5LPOQ9WY5rmBACpg3uD6GO7xIgA&usqp=CAU"
        />
      </div>
    </div>
  );
}

export default Nav;
