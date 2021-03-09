import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import DraftsIcon from "@material-ui/icons/Drafts";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__upper">
        <div className="left__section">
          <h2>More About Netflix</h2>
          <p>
            Netflix, Inc. is an American over-the-top content platform and
            production company headquartered in Los Gatos, California. Netflix
            was founded in 1997 by Reed Hastings and Marc Randolph in Scotts
            Valley, California.
          </p>
        </div>

        <div className="middle__section">
          <h2>Keep Connected</h2>
          <FacebookIcon className="footer__icon" />{" "}
          <p className="footer__Social">Link us on Facebook.</p>
          <br />
          <TwitterIcon className="footer__icon" />{" "}
          <p classname="footer__Social">Follow us on Twitter.</p>
          <br />
          <InstagramIcon className="footer__icon" />
          <p classname="footer__Social">Follow us on Instagram.</p>
          <br />
          <MailIcon className="footer__icon" />{" "}
          <p classname="footer__Social">Write a Mail.</p>
        </div>

        <div className="right__section">
          <h2 className>Contact Information</h2>
          <HomeIcon className="footer__icon2" />
          <p className="footer__add">
            Konoha Village ,one of the five great Nations in Japan , Anime
            World.
          </p>
          <PhoneAndroidIcon className="footer__icon2" />
          <p className="footer__add">9991234561</p>
          <DraftsIcon className="footer__icon2" />
          <p className="footer__add">contact@gmail.com</p>
        </div>
      </div>

      <div className="footer__bottom"></div>
    </div>
  );
}

export default Footer;
