import React from 'react'
import '../components/styles/score.css'
import ScoreInfo from '../components/scoreInfo'

class Score extends React.Component {

    redirectMenu = () => {
        this.props.history.push({
            pathname: '/',
        })
    }

    redirectQuestions = () => {
        this.props.history.push({
            pathname: '/questions',
        })
    }

    render() {
        if(this.props.location.state.score <= 2){
            return (
                <div className="backgroundKOS background">
                    <ScoreInfo score={this.props.location.state.score} redirectMenu={this.redirectMenu} redirectQuestions={this.redirectQuestions}></ScoreInfo>
                </div>
            )  
        }
        if(this.props.location.state.score > 2 && this.props.location.state.score <= 5){
            return (
                <div className="backgroundLookRick background">
                    <ScoreInfo score={this.props.location.state.score} redirectMenu={this.redirectMenu} redirectQuestions={this.redirectQuestions}></ScoreInfo>
                </div> 
            )
        }
        if(this.props.location.state.score > 5 && this.props.location.state.score <= 10){
            return (
                <div className="backgroundDance1 background">
                    <ScoreInfo score={this.props.location.state.score} redirectMenu={this.redirectMenu} redirectQuestions={this.redirectQuestions}></ScoreInfo>
                </div> 
            )  
        }
        if(this.props.location.state.score > 10){
            return (
                <div className="backgroundDance2 background">
                    <ScoreInfo score={this.props.location.state.score} redirectMenu={this.redirectMenu} redirectQuestions={this.redirectQuestions}></ScoreInfo>
                </div> 
            ) 
        }
    }
}

export default Score