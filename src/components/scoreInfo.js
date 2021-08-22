import React from 'react'
import '../components/styles/scoreInfo.css'

class ScoreInfo extends React.Component {

    state = {
        phrase: ''
    }

    componentDidMount() {
        let phrase = '';
        if(this.props.score <= 3){
            phrase = 'El resultado es menor o igual a 3';
        }
        if(this.props.score > 3 && this.props.score <= 7) {
            phrase = 'El resultado está entre 3 y 7';
        }
        if(this.props.score > 7 && this.props.score <= 15) { 
            phrase = 'El resultado está entre 7 y 15';
        }
        if(this.props.score > 15) {
            phrase = 'El resultado es mayor de 15';
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