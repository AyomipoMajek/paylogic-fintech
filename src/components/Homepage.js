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
        <a href="https://play.google.com/store/games" target="_blank" rel="noopener noreferrer">
          <button className="btn" id="btn3" type="button">
            <img className="btnlogo" src={googleplay} alt="playstore-logo" />
            Get on&nbsp;
            <b>
              Playstore
            </b>
          </button>
        </a>

        <a href="https://apps.apple.com/gb/app/apple-store" target="_blank" rel="noopener noreferrer">
          <button className="btn" id="btn3" type="button">
            <img className="btnlogo" src={appstore} alt="apple-logo" />
            Get on&nbsp;
            <b>
              Appstore
            </b>
          </button>
        </a>
      </div>
      <div className="theimage">
        <img className="phone1" src={phone1} alt="phone view" />
        <img className="phone2" src={phone2} alt="phone view" />
        <img className="phone3" src={phone3} alt="phone view" />
      </div>
      <div>
        <h3 className="quote">Trusted by World Leading Organisations</h3>
        <div className="socials">
          <ul className="thesocials">
            <li className="coinbase">
              <a href="https://www.coinbase.com/" target="_blank" rel="noopener noreferrer">
                <img src={coinbase} alt="coinbase" />
              </a>
            </li>
            <li className="spotify">
              <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer">
                <img src={spotify} alt="spotify" />
              </a>
            </li>
            <li className="flutterwave">
              <a href="https://dashboard.flutterwave.com/login" target="_blank" rel="noopener noreferrer">
                <img src={flutterwave} alt="flutterwave" />
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
);

export default Homepage;
