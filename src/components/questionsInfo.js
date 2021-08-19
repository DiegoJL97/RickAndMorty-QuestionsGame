import React from 'react'
import Title from './title'
import '../components/styles/questionsInfo.css'

class QuestionsInfo extends React.Component {


    render(){
        return (
            <React.Fragment>
                <div className="score">
                    <p>Score: 0</p>
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
                            return(
                                <div className="questionsButtonOption float" key={option}>
                                    <button className="ram-font btn" value={option}>{option}</button>
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