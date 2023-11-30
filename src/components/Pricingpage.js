import './pricingpage.css';
import React from 'react';
import frontcard from '../assets/frontcard.svg';
import back from '../assets/back.svg';
import bars from '../assets/bars.svg';

const Pricingpage = () => (
  <div className="pricingpage">
    <section className="pricings">
      <div className="intro">
        <h1>One Card, All Payments</h1>
        <p>
          With our innovative fintech solutions,
          experience the ultimate convenience of consolidating
          all your payments into one versatile card.
        </p>
      </div>
      <div className="cards">
        <img className="backcard" src={back} alt="mastercard" />
        <img className="otherbackcard" src={back} alt="mastercard" />
        <img className="frontcard" src={frontcard} alt="visa card" />
      </div>
      <div className="swipebars">
        <img className="bars" src={bars} alt="bars" />
      </div>
    </section>
  </div>
);

export default Pricingpage;
