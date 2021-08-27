import React from 'react'
import '../components/styles/scoreInfo.css'

class ScoreInfo extends React.Component {

    state = {
        phrase: ''
    }

    componentDidMount() {
        let phrase = '';
        if(this.props.score <= 2){
            phrase = 'Come on, is that all you got? Try again and try not to embarrass yourself';
        }
        if(this.props.score > 2 && this.props.score <= 5) {
            phrase = "Well... I have to admit it's not a bad score, but I bet you can do even better";
        }
        if(this.props.score > 5 && this.props.score <= 10) { 
            phrase = "Wubba lubba dub dub! That's a great score, very few people come this far";
        }
        if(this.props.score > 10) {
            phrase = 'Congratulations! You are top at this game!';
        }
        this.setState({
            phrase: phrase
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="rowScore showScore">
                    <h1>Your score: </h1>
                    <h1>{this.props.score}</h1>
                </div>
                <div className="rowScore showPhrase">
                    <p>{this.state.phrase}</p>
                </div>
                <div className="rowScore showMenu">
                    <div className="scoreMenuBox menuButton">
                        <button className="ram-font btn" onClick={this.props.redirectMenu}>Menu</button>
                    </div>
                    <div className="scoreMenuBox playAgainButton">
                        <button className="ram-font btn" onClick={this.props.redirectQuestions}>Play again</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default ScoreInfo