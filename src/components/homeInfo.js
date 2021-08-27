import React from 'react'
import '../components/styles/homeInfo.css'
import 'animate.css'
import { Link } from 'react-router-dom'
import Title from '../components/title'

const HomeInfo = () => (
    <div className="homeInfo">
        <Title class="top"></Title>
        <div className="homeParagraph animate__animated animate__fadeIn">
            <p >Wubba lubba dub dub!</p>
            <p>Do you think you know a lot about Rick and Morty? Test yourself and find out how many questions in a row you can answer</p>
        </div>
        <div className="homePlayButton animate__animated animate__fadeIn">
            <Link to="/questions">
                <button className="ram-font btn">Play</button>
            </Link>
        </div>
    </div>
)

export default HomeInfo