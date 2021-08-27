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
                    <div className="characterImg questionsBox float">
                        <img src={this.props.image} alt="character"></img>
                    </div>
                    <div className="questionsParagraph questionsBox float">
                        <p>{this.props.question}</p>
                    </div>
                </div>
                <div className="questionsRow float">
                    {
                        this.props.options.map((option) => {
                            if(option === this.props.correctAnswer && this.props.correctAnswerClicked){
                                return (
                                    <div className="questionsButtonOption float" key={option}>
                                        <button className="ram-font btn backgroundGreen" value={option} onClick={ () => this.props.checkQuestion(option)}>
                                            {option}
                                        </button>
                                    </div>
                                )
                            } else {
                                return(
                                    <div className="questionsButtonOption float" key={option}>
                                        <button className="ram-font btn questionsButton" value={option} onClick={ () => this.props.checkQuestion(option)}>
                                            {option}
                                        </button>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default QuestionsInfo