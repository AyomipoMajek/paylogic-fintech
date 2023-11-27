import React, { useState } from 'react';
import './aboutpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import safety from '../assets/safety.jpg';
import tech from '../assets/tech.jpg';
import solution from '../assets/solution.jpg';

const Aboutpage = () => {
  const [showSafety, setShowSafety] = useState(false);
  const [showTech, setShowTech] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="aboutpage">
      <section className="reason">
        <h1>Why Choose Us</h1>
        <p className="reason-p">
          From advanced budgeting and investing to personalized
          financial insights and automated savings, our innovative
          solutions are designed to propel you towards financial success.
        </p>
        <div className="services">
          <div className="service">
            <img className="abtIcons" src={safety} alt="safetyIcon" />
            <h3>Safety and Security</h3>
            <p>
              With our 100% modern security system put in place
              at Paylogic, we are committed to ensuring the safety of funds
              of our esteemed customers and users,
            </p>
            {showSafety && (
              <div className="show">
                <p>
                  employing advanced encryption protocols, multi-factor authentication,
                  and continuous monitoring to safeguard against any potential threats or
                  unauthorized access. Your peace of mind is our top priority.
                </p>
              </div>
            )}
            <button
              className="learnbtn"
              type="button"
              onClick={() => setShowSafety(!showSafety)}
            >
              {showSafety ? (
                <>
                  Show less
                  <FontAwesomeIcon icon={faCircleChevronUp} style={{ color: '#703EDF', alignSelf: 'center', paddingLeft: '5px' }} />
                </>
              ) : (
                <>
                  Learn more
                  <FontAwesomeIcon icon={faCircleChevronRight} style={{ color: '#703EDF', alignSelf: 'center', paddingLeft: '5px' }} />
                </>
              )}
            </button>
          </div>
          <div className="service">
            <img className="abtIcons" src={tech} alt="techIcon" />
            <h3>Cutting Edge Technology</h3>
            <p>
              We leverage the latest advancements in financial technology to
              provide you with a seamless and secure user experience. Our
              state of the art platform ensures your
            </p>
            {showTech && (
              <div className="show">
                <p>
                  financial transactions are conducted with the utmost efficiency and protection.
                  With real-time fraud detection and robust data encryption, you can trust that your
                  sensitive information is shielded from any potential risks.
                </p>
              </div>
            )}
            <button
              className="learnbtn"
              type="button"
              onClick={() => setShowTech(!showTech)}
            >
              {showTech ? (
                <>
                  Show less
                  <FontAwesomeIcon icon={faCircleChevronUp} style={{ color: '#703EDF', alignSelf: 'center', paddingLeft: '5px' }} />
                </>
              ) : (
                <>
                  Learn more
                  <FontAwesomeIcon icon={faCircleChevronRight} style={{ color: '#703EDF', alignSelf: 'center', paddingLeft: '5px' }} />
                </>
              )}
            </button>
          </div>
          <div className="service">
            <img className="abtIcons" src={solution} alt="solutionIcon" />
            <h3>Comprehensive Solutions</h3>
            <p>
              From budgeting and saving to investing and planning for the
              future, we offer a wide range of comprehensive solutions to meet
              your financial needs. Our integrated
            </p>
            {showSolution && (
              <div className="show">
                <p>
                  platform seamlessly adapts to your evolving financial goals and aspirations.
                  By harnessing cutting-edge technology and expert insights, we empower you to
                  take control of your financial journey.
                </p>
              </div>
            )}
            <button
              className="learnbtn"
              type="button"
              onClick={() => setShowSolution(!showSolution)}
            >
              {showSolution ? (
                <>
                  Show less
                  <FontAwesomeIcon icon={faCircleChevronUp} style={{ color: '#703EDF', alignSelf: 'center', paddingLeft: '5px' }} />
                </>
              ) : (
                <>
                  Learn more
                  <FontAwesomeIcon icon={faCircleChevronRight} style={{ color: '#703EDF', alignSelf: 'center', paddingLeft: '5px' }} />
                </>
              )}
            </button>
          </div>
        </div>
      </section>
      <section className="offers">
        <h1>Unlock a new potential with us</h1>
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
};

export default Aboutpage;
