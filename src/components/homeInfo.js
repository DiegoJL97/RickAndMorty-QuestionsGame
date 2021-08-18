import React from 'react'
import '../components/styles/homeInfo.css'
import 'animate.css'

const HomeInfo = () => (
    <div className="homeInfo">
        <div className="homeTitle">
                <h1 className="marginAndShadowH ram-font animate__animated animate__bounceInDown">RICK AND MORTY </h1>
                <h3 className="marginAndShadowH ram-font animate__animated animate__bounceInDown">QUESTIONS GAME</h3>
        </div>
        <div className="homeParagraph animate__animated animate__fadeIn">
            <p >Wubba lubba dub dub!</p>
            <p>Do you think you know a lot about Rick and Morty? Test yourself and find out how many questions in a row you can answer</p>
        </div>
        <div className="homePlayButton animate__animated animate__fadeIn">
            <button className="ram-font btn">Play</button>
        </div>
    </div>
)

export default HomeInfo