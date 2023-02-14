import React from 'react';
import './Home.css';
import logo from "./assets/img/logo.png"

function Home() {
  return (
    <div className='home'>
        <div className='home__bg'>
            <div className='header d__flex align__items__center pxy__30'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='navigation'>
                    <ul className="navbar">
                        
                    </ul>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Home;