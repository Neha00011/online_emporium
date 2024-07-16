import React from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <div className="main">
        <div className="self">
          <h4>Neha Panda</h4>
          <p>
            I am currently a UG IT Student from Jalpaiguri Government
            Engineering College
          </p>
        </div>
        <div className="subscribe">
          <h4>Subscribe to get important updates</h4>
          <input type="email" placeholder="YOUR EMAIL" name="subemail"></input>
          <button>Subscribe</button>
        </div>
        <div className="connect">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <Link target="_blank" to="https://github.com/Neha00011">
                <BsGithub />
              </Link>
            </li>

            <li>
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/neha-panda-32616422a/"
              >
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <hr />
        <div className="copy">
          <p>© {new Date().getFullYear()} Neha Panda. All Rights Reserved</p>
          <p>PRIVACY POLICY, TERMS & CONDITIONS</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
