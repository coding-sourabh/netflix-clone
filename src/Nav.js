import React, { useState, useEffect } from "react";
import "./Nav.css";
import { useHistory } from "react-router-dom";
import { logDOM } from "@testing-library/dom";

function Nav() {
  const [show, handleShow] = useState(true);
  const history = useHistory();

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
          onClick={() => history.push("/")}
          className="nav__logo"
          src="https://lh3.googleusercontent.com/proxy/6pmYu5ricBiT8297hdKnSfi9nBp1v8l6vf2lxX4pY8t7sciYkbjWVpgACNBXLyaQTQnB7LIoB91qYV8qui3atEziaRHR8UgP1wBLw7MnmRV_UXZtO4k"
        />

        <img
          onClick={() => 
            history.push("/profile")
          }
          className="nav__avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        />
      </div>
    </div>
  );
}

export default Nav;
