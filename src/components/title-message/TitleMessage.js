/* ============================================
   8. ENHANCED TITLE MESSAGE COMPONENT (TitleMessage.js)
   ============================================ */

import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 2;
  margin-top: -125px;
  text-align: center;
  
  strong {
    font-size: 1.25em;
  }
  
  div {
    text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.6);
    font-weight: 100;
    
    .main {
      font-size: 55px;
      font-family: 'Dancing Script', cursive;
      font-weight: normal;
      color: #66fcf1;
      text-shadow: 0 0 20px rgba(102, 252, 241, 0.8),
                   0 0 40px rgba(102, 252, 241, 0.5),
                   0 0 60px rgba(102, 252, 241, 0.3);
      animation: glow 2s ease-in-out infinite alternate;
      margin-bottom: 20px;
      background: linear-gradient(135deg, #66fcf1 0%, #45a29e 50%, #66fcf1 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .sub {
      font-size: 32px;
      letter-spacing: 3px;
      font-family: 'Great Vibes', cursive;
      font-weight: normal;
      color: #45a29e;
      text-shadow: 0 0 15px rgba(69, 162, 158, 0.6);
      padding: 15px 30px;
      background: rgba(16, 16, 24, 0.6);
      backdrop-filter: blur(10px);
      border-radius: 50px;
      display: inline-block;
      border: 2px solid rgba(102, 252, 241, 0.3);
    }
  }

  @keyframes glow {
    from {
      text-shadow: 0 0 10px rgba(102, 252, 241, 0.6),
                   0 0 20px rgba(102, 252, 241, 0.4),
                   0 0 30px rgba(102, 252, 241, 0.2);
    }
    to {
      text-shadow: 0 0 20px rgba(102, 252, 241, 1),
                   0 0 40px rgba(102, 252, 241, 0.7),
                   0 0 60px rgba(102, 252, 241, 0.5);
    }
  }

  @media (max-width: 768px) {
    .main {
      font-size: 40px !important;
    }
    .sub {
      font-size: 24px !important;
      padding: 10px 20px !important;
    }
  }
`;

const TitleMessage = () => (
    <MyTitleMessage>
      <div className="titleMessage">
        <div className="heading">
          <div className="main text-center mb-3">
            Hi, I am
            <br />
            <span>
              <strong>Aditya<span role="img" aria-label="handwave">👋</span></strong>
            </span>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: ["Web Developer", "Tech Enthusiast", "Nature Lover"],
                autoStart: true,
                loop: true,
                delay: 50
              }}
            />
          </div>
        </div>
      </div>
    </MyTitleMessage>
);
  
export default TitleMessage;