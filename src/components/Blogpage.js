import './blogpage.css';
import React from 'react';
import P from '../assets/p.jpg';
import PayLogic from '../assets/PayLogic.jpg';
import twitter from '../assets/twitter.svg';
import linkedn from '../assets/linkedn.svg';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';

const Blogpage = () => (
  <div className="blogpage">
    <section className="blog">
      <div className="blogitems">
        <h1>
          1000+ Subscriptions
        </h1>
        <p>
          Subscribe to our newsletter to receive monthly
          updates about our products
        </p>
        <form className="subscription">
          <input className="input" type="email" placeholder="Enter email address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
    <section className="contact">
      <div className="contactitems">
        <div className="paylogo">
          <img className="pee" src={P} alt="logo" />
          <img className="word" src={PayLogic} alt="logo" />
        </div>
        <div className="contacttable">
          <table className="reachus">
            <tr>
              <th>Company</th>
              <th>Products</th>
              <th>Support</th>
            </tr>
            <tr>
              <td>About Us</td>
              <td>Payval</td>
              <td>Trust & Safety</td>
            </tr>
            <tr>
              <td>Resources</td>
              <td>Payket</td>
              <td>Contact Help</td>
            </tr>
            <tr>
              <td>Partners</td>
              <td>PayWallet</td>
            </tr>
          </table>
        </div>
        <div className="socialmedia">
          <ul className="socials">
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkedn} alt="linkedn" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
          </ul>
        </div>

      </div>
      <footer className="footer">
        <p>
          Copyrights
          <span className="cee">
            ©
          </span>
          2023 PayLogic. All Rights Reserved
        </p>
      </footer>
    </section>
  </div>
);

export default Blogpage;
