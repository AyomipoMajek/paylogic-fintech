import './homepage.css';
import React from 'react';
import appstore from '../assets/appstore.svg';
import googleplay from '../assets/googleplay.svg';
import phone1 from '../assets/phone1.svg';
import phone2 from '../assets/phone2.svg';
import phone3 from '../assets/phone3.svg';
import coinbase from '../assets/coinbase.svg';
import spotify from '../assets/spotify.svg';
import flutterwave from '../assets/flutterwave.svg';

const Homepage = () => (
  <div className="homepage">
    <div className="main">
      <h1 className="title">
        Transform Your Finances, With The Power Of Our Innovative
        <br />
        <span style={{ color: '#703EDF' }}> Fintech Platform </span>
      </h1>
      <p className="description">
        We help you unlock your financial potential.
        By overcoming barriers, optimize your financial decisions,
        and achieve greater success in managing your funds.
      </p>

      <div className="buttons">
        <button className="btn" id="btn3" type="button">
          <img className="btnlogo" src={googleplay} alt="playstore-logo" />
          Get on&nbsp;
          <b>
            Playstore
          </b>
        </button>
        <button className="btn" id="btn3" type="button">
          <img className="btnlogo" src={appstore} alt="apple-logo" />
          Get on&nbsp;
          <b>
            Appstore
          </b>
        </button>
      </div>
      <div className="theimage">
        <img className="phone1" src={phone1} alt="phone view" />
        <img className="phone2" src={phone2} alt="phone view" />
        <img className="phone3" src={phone3} alt="phone view" />
      </div>
      <div>
        <h3 className="quote">Trusted by World Leading Organisations</h3>
        <ul className="thesocials">
          <li className="coinbase">
            <img src={coinbase} alt="coinbase" />
          </li>
          <li className="spotify">
            <img src={spotify} alt="spotify" />
          </li>
          <li className="flutterwave">
            <img src={flutterwave} alt="flutterwave" />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Homepage;
