import React from 'react'
import QuestionsInfo from '../components/questionsInfo'
import '../components/styles/questions.css'
import url from '../config'
import Loading from '../components/loading'

class Questions extends React.Component {

    state = {
        score: 0,
        loading: true,
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
        await this.generateCharacterAndQuestion();
    }

    generateCharacterAndQuestion = async () => {
        await this.fetchCharacter();
        await this.generateQuestion();
        this.setState({
            loading: false
        })
    }

    generateRandomNumber = (maxNumber) => {
        const min = 1;
        const max = maxNumber;
        return Math.round(min + Math.random() * (max - min));
    }

    fetchCharacter = async () => {
        try {
            let randomId = this.generateRandomNumber(671);
            let res = await fetch(url+'character/'+randomId);
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
                    let res = await fetch(url+'/character/'+this.generateRandomNumber(671));
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
                    question: 'Is '+name+' alive, dead, or unknown?',
                    correctAnswer: this.state.status,
                    options: this.shuffleArray(['Dead','Alive','Unknwon'])
                })
                break;
            case 3:
                this.setState({
                    question: 'What kind of species does '+name+' belong to?'
                })
                let optionsSpecies = [];
                optionsSpecies.push(this.state.species);
                let i = 0;
                while(i<2) {
                    let res = await fetch(url+'/character/'+this.generateRandomNumber(671));
                    let data = await res.json();
                    if(!optionsSpecies.includes(data.name)){
                        optionsSpecies.push(data.name)
                    }
                    i++;
                }
                this.setState({
                    options: this.shuffleArray(optionsSpecies),
                    correctAnswer: this.state.species
                })
                break;
            case 4:
                this.setState({
                    question: 'Where did '+name+' come from?'
                })
                let optionsLocations = []
                for (let i = 0; i < 2; i++) {
                    let res = await fetch(url+'/location/'+this.generateRandomNumber(108));
                    let data = await res.json();
                    optionsLocations.push(data.name)
                }
                optionsLocations.push(this.state.origin);
                this.setState({
                    options: this.shuffleArray(optionsLocations),
                    correctAnswer: this.state.origin
                })
                break;
            case 5:
                this.setState({
                    question: 'Where was '+name+' last seen?'
                })
                let optionsLastSeen = []
                for (let i = 0; i < 2; i++) {
                    let res = await fetch(url+'/location/'+this.generateRandomNumber(108));
                    let data = await res.json();
                    optionsLastSeen.push(data.name)
                }
                optionsLastSeen.push(this.state.location);
                this.setState({
                    options: this.shuffleArray(optionsLastSeen),
                    correctAnswer: this.state.location
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

    checkQuestion = (value) => {
        if(value === this.state.correctAnswer) {
            let updatedScore = this.state.score + 1;
            this.setState({
                score: updatedScore
            })
            this.generateCharacterAndQuestion();
        } else {
            //Redirección a Score page
            this.props.history.push({
                pathname: '/score',
                state: { score: this.state.score }
            })
        }
    }

    render(){
        if(this.state.loading){
            return <Loading/> 
        }
        return (
            <div className="questionsBackground">
                <QuestionsInfo
                    image={this.state.image}
                    question={this.state.question}
                    options={this.state.options}
                    score={this.state.score}
                    checkQuestion={this.checkQuestion}
                >
                </QuestionsInfo>
            </div>
        )
    }

}

export default Questions