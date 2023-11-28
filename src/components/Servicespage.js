import './servicespage.css';
import React from 'react';

const Servicespage = () => (
  <div className="servicepage">
    <section className="offers">
      <h1 id="unlock">Unlock a new potential with us</h1>
      <div className="the-offers">
        <div className="one-two">
          <div className="offer">
            <h1>1</h1>
            <h3>Secure Payments Solutions</h3>
            <p>
              Enjoy seamless and secure online transactions,
              money transfers, and bill payments with our trusted payment solutions.
            </p>
          </div>
          <div className="offer">
            <h1>2</h1>
            <h3>Budgeting and Expense Tracking</h3>
            <p>
              Our platform provides intuitive tools to help you create budgets, track
              expenses and gain insights into your spending habit.
            </p>
          </div>
        </div>
        <div className="offer">
          <h1>3</h1>
          <h3>Bills and Utilities Management</h3>
          <p>
            Simplify your bill payments and utilities management with out integrated
            platform. Gain insights into your spending pattern across various utilities.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Servicespage;
