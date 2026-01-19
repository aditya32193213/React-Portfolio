/* ============================================
   7. ENHANCED SCROLL DOWN COMPONENT (ScrollDown.js)
   ============================================ */

import React from "react";
import styled from "styled-components";

const MyScroll = styled.div`
  position: relative;
  z-index: 1;
  bottom: 1.6em;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: transparent;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(102, 252, 241, 0.8), 0 0 20px rgba(102, 252, 241, 0.5);
  color: #66fcf1;
  animation: 3s ease-in-out 1s infinite normal none running MoveUpDown;
  
  .turn {
    font-size: 35px;
    cursor: pointer;
    transform: rotate(90deg);
    transition: all 0.3s ease;
    padding: 15px;
    border-radius: 50%;
    background: rgba(102, 252, 241, 0.1);
    backdrop-filter: blur(5px);
    border: 2px solid rgba(102, 252, 241, 0.3);
  }
  
  .turn:hover {
    transform: rotate(90deg) scale(1.2);
    background: rgba(102, 252, 241, 0.2);
    border-color: rgba(102, 252, 241, 0.6);
    box-shadow: 0 0 20px rgba(102, 252, 241, 0.4);
    text-shadow: 0 0 15px rgba(102, 252, 241, 1);
  }

  @keyframes MoveUpDown {
    0%, 100% {
      bottom: 1.6em;
    }
    50% {
      bottom: 100px;
    }
  }
`;

const ScrollDown = () => {
  return (
    <MyScroll>
      <div>
        <a href="#about" className="turn nav-link">&#8608;</a>
      </div>
    </MyScroll>
  );
};

export default ScrollDown;
