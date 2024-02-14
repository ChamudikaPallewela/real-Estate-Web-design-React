import React from 'react'
import "./hero.css"
import {HiLocationMarker } from "react-icons/hi";
import CountUp from 'react-countup';

const hero = () => {
  return (
   <section className="hero-wrapper">
    <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
            <div className="hero-title">
                <div className="orange-circle"/>
                <h1>Discover <br/>Most Sutable<br/> Property</h1>
            </div>
            <br/>
            <div className="flexColStart hero-des">
                <span className="secondaryText">Find a variety of properties that suit you very easily</span>
                <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
            </div>
            <br/>
            <div className="flexCenter search-bar">
                <HiLocationMarker color="var(--blue)" size={25}/>
                <input type='text'/>
                <button className="button">Search</button>
            </div>
            <br/>
            <div className="flexCenter stats">
                <div className="flexColCenter stat">
                    <span><CountUp start={8800} end={90000} duration={4}/>
                    <span>+</span>
                    </span>
                    <span className="secondaryText">Premium Products</span>
                </div>
                <div className="flexColCenter stat">
                    <span><CountUp start={1950} end={2000} duration={4}/>
                    <span>+</span>
                    </span>
                    <span className="secondaryText">Happy Customers</span>
                </div>
                <div className="flexColCenter stat">
                    <span><CountUp end={28}/>
                    <span>+</span>
                    </span>
                    <span className="secondaryText">Award Winning</span>
                </div>
            </div>

        </div>
        <div className="flexCenter hero-right">
            <div className="image-container">
                <img src="./hero-image.png" alt="heroImage" />
            </div>
        </div>

    </div>
   </section>
  )
}

export default hero