import React from 'react';
import QuestionsInfo from '../components/questionsInfo';
import '../components/styles/questions.css'
import url from '../config'

class Questions extends React.Component {

    state = {
        score: 0,
        name: '',
        status: '',
        species: '',
        origin: '',
        location: '',
        image: '',
        question: '',
        options: [],
        correctAnswer: ''
    }

    async componentDidMount(){
        await this.fetchCharacter();
        await this.generateQuestion();
    }

    generateRandomNumber = (maxNumber) => {
        const min = 1;
        const max = maxNumber;
        return Math.round(min + Math.random() * (max - min));
    }

    fetchCharacter = async () => {
        try {
            let randomId = this.generateRandomNumber(671);
            let res = await fetch(url+randomId);
            let data = await res.json();
            this.setState({
                name: data.name,
                status: data.status,
                species: data.species,
                origin: data.origin.name,
                location: data.location.name,
                image: data.image
            })
        } catch (error) {
            //Handle error
        }
    }

    generateQuestion = async () => {
        let questionId = this.generateRandomNumber(5);
        const name = this.state.name;
        switch(questionId) {
            case 1:
                this.setState({
                    question: 'What is the name of the character in the image?'
                }) 
                let options = []
                for (let i = 0; i < 2; i++) {
                    let res = await fetch(url+this.generateRandomNumber(671));
                    let data = await res.json();
                    options.push(data.name)
                }
                options.push(this.state.name);
                this.setState({
                    options: this.shuffleArray(options),
                    correctAnswer: this.state.name
                })
                break;
            case 2: 
                this.setState({
                    question: 'Is '+name+' alive, dead, or unknown?'
                })
                break;
            case 3:
                this.setState({
                    question: 'What kind of species does '+name+' belong to?'
                })
                break;
            case 4:
                this.setState({
                    question: 'Where did '+name+' come from?'
                })
                break;
            case 5:
                this.setState({
                    question: 'Where was '+name+' last seen?'
                })
                break;
            default:
                break;
        }
    }

    shuffleArray = (array) => {
        var currentIndex = array.length,  randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    render(){
        return (
            <div className="questionsBackground">
                <QuestionsInfo
                    name={this.state.name}
                    status={this.state.status}
                    species={this.state.species}
                    origin={this.state.origin}
                    location={this.state.location}
                    image={this.state.image}
                    question={this.state.question}
                    options={this.state.options}
                >
                </QuestionsInfo>
            </div>
        )
    }

}

export default Questions