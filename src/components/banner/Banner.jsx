import React from "react";
import "./Banner.css";
import stration from "../../assets/Illustration.png";
import logotypes from "../../assets/Logotypes.png";
export default function Banner() {
  return (
    <div>
      <div className="banne_wrapper">
        <div className="banner_left">
          <h1>Navigating the <br/> digital landscape <br/> for success</h1>
          <p>
            Our digital marketing agency helps businesses <br/> grow and succeed
            online through a range of <br/> services including SEO, PPC, social media
            marketing,<br/> and content creation.
          </p>
          <button className="banner_left_btn">Book a consultation</button>
        </div>
        <img className="stration" src={stration} />
      </div>
      <img className="logotypes" src={logotypes} />
    </div>
  );
}
