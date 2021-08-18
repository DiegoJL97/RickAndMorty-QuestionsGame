import React from 'react'
import HomeInfo from '../components/homeInfo'
import '../components/styles/home.css'

const Home = () => (
    <div className="background-img">
        <div className="homeHelpMeButton animate__animated animate__backInDown">
            <button className="btn">HELP ME</button>
        </div>
        <HomeInfo></HomeInfo>
    </div>
)

export default Home