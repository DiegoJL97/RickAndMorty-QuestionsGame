import React from 'react'
import Title from './title'
import '../components/styles/questionsInfo.css'

class QuestionsInfo extends React.Component {

    render(){
        return (
            <React.Fragment>
                <div className="score animate__animated animate__bounceInDown">
                    <p>Score: {this.props.score}</p>
                </div>
                <div className="topTitle">
                    <Title></Title> 
                </div>
                <div className="questionsRow float">
                    <div className="characterImg questionsBox float animate__animated animate__bounceInDown">
                        <img src={this.props.image} alt="character"></img>
                    </div>
                    <div className="questionsParagraph questionsBox float animate__animated animate__bounceInDown">
                        <p>{this.props.question}</p>
                    </div>
                </div>
                <div className="questionsRow float">
                    {
                        this.props.options.map((option) => {
                            return(
                                <div className="questionsButtonOption float animate__animated animate__fadeIn" key={option}>
                                    <button className="ram-font btn" value={option} onClick={ () => this.props.checkQuestion(option)}>
                                        {option}
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default QuestionsInfo