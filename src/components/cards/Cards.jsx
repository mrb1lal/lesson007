import React from "react";
import "./Cards.css";
import cardsss from "../../assets/Illustration (1).png";
import illusion from "../../assets/Illustration (2).png";

export default function Cards() {
  return (
    <div className="cards_section">
      <div className="cards_grid">
        
        {/* 1 - Karta: Kulrang */}
        <div className="service_card card_light">
          <div className="card_left">
            <div className="card_title">
              <h2><span>Search engine</span></h2>
              <h2><span>optimization</span></h2>
            </div>
            <div className="card_link">
              <span className="arrow_icon">➔</span>
              <p>Learn more</p>
            </div>
          </div>
          <div className="card_right">
            <img src={cardsss} alt="Search engine optimization" />
          </div>
        </div>

        {/* 2 - Karta: Yashil */}
        <div className="service_card card_green">
          <div className="card_left">
            <div className="card_title">
              <h2><span>Pay-per-click</span></h2>
              <h2><span>advertising</span></h2>
            </div>
            <div className="card_link">
              <span className="arrow_icon">➔</span>
              <p>Learn more</p>
            </div>
          </div>
          <div className="card_right">
            <img src={illusion} alt="Pay-per-click advertising" />
          </div>
        </div>

        {/* 3 - Karta: Kulrang */}
        <div className="service_card card_light">
          <div className="card_left">
            <div className="card_title">
              <h2><span>Search engine</span></h2>
              <h2><span>optimization</span></h2>
            </div>
            <div className="card_link">
              <span className="arrow_icon">➔</span>
              <p>Learn more</p>
            </div>
          </div>
          <div className="card_right">
            <img src={cardsss} alt="Search engine optimization" />
          </div>
        </div>

        {/* 4 - Karta: Yashil */}
        <div className="service_card card_green">
          <div className="card_left">
            <div className="card_title">
              <h2><span>Pay-per-click</span></h2>
              <h2><span>advertising</span></h2>
            </div>
            <div className="card_link">
              <span className="arrow_icon">➔</span>
              <p>Learn more</p>
            </div>
          </div>
          <div className="card_right">
            <img src={illusion} alt="Pay-per-click advertising" />
          </div>
        </div>

        {/* 5 - Karta: Kulrang */}
        <div className="service_card card_light">
          <div className="card_left">
            <div className="card_title">
              <h2><span>Search engine</span></h2>
              <h2><span>optimization</span></h2>
            </div>
            <div className="card_link">
              <span className="arrow_icon">➔</span>
              <p>Learn more</p>
            </div>
          </div>
          <div className="card_right">
            <img src={cardsss} alt="Search engine optimization" />
          </div>
        </div>

        {/* 6 - Karta: Yashil */}
        <div className="service_card card_green">
          <div className="card_left">
            <div className="card_title">
              <h2><span>Pay-per-click</span></h2>
              <h2><span>advertising</span></h2>
            </div>
            <div className="card_link">
              <span className="arrow_icon">➔</span>
              <p>Learn more</p>
            </div>
          </div>
          <div className="card_right">
            <img src={illusion} alt="Pay-per-click advertising" />
          </div>
        </div>

      </div>
    </div>
  );
}