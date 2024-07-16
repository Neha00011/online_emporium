import React from "react";
import welcomeImg from "../icon/Welcome.jpg";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  const { name } = props.data;

  return (
    <div id="welcome">
      <div className="left">
        <p>
          WELCOME TO
          <br />
          <label>{name}</label>
        </p>
        <p>
          Welcome to your go-to destination for the latest and greatest in tech
          gadgets and gizmos. From sleek smartphones to powerful laptops, smart
          home wonders to futuristic wearables, we've curated a collection
          showcasing the very best in technology. Explore and experience the
          future firsthand as you browse our selection, handpicked to cater to
          your every need and desire. Our mission is to not only provide you
          with the finest tech products, but also to create an unparalleled
          shopping experience. Dive into our world of cutting-edge technology
          and discover how we can make your life smarter, simpler, and more
          exciting.
        </p>
        <button>
          <Link to="/products">SHOP NOW</Link>
        </button>
      </div>
      <div className="right">
        <img src={welcomeImg} alt="Not Available" />
      </div>
    </div>
  );
};

export default Welcome;
