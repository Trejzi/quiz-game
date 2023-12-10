import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css";

function Home() {

    return (
      <div className='app'>
                      <div className='tittle'>
                          <h1>Quiz Game</h1>
                      </div>
                      <div className="button-container">
                        <Link to="/question">
                       <button id='option'>START QUIZ</button>
                       </Link>
                      </div>
          </div>
    );
  }
  
  export default Home;
  