import React, { Component } from 'react';
import './App.css';
import Headline from './Headline.js';
import InputComp from './InputComp.js';
import Draggable, {DraggableCore} from 'react-draggable';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      words: [],
    }
  }


  addWord = (newWord) => {
    let newWords = this.state.words.concat(newWord);
    this.setState({
      words: newWords  
    })
  }

  showWords = () =>{
    let paragraphs = this.state.words.map((word) => {
        return <Draggable><div className="box"> <p id="word">{word}</p> </div></Draggable>
    });
    return paragraphs
    
    }

  render() {
    return (
      <div className="App">

        <div className="leftPart">
          <div className="headlines">
            <Headline text={"TITLE"} smallText1={"LOG IN"} 
            smallText2={"CATAGORIES"} smallText3={"INFO"}></Headline>
          </div>
        </div>

        <div className="rightPart">
          <InputComp submit={this.addWord}></InputComp>

          <h3>Drag and Drop Your Titles!</h3>

        <div className="container">
          <div className="graphic">
            <img src="https://s3-us-west-1.amazonaws.com/sfmoma-media-dev/www-media/2018/11/30000121/Paramount-768x516.jpg"></img>
          </div>
          <div className="display">
              {this.showWords()}
          </div>
        </div>
         

        </div>


      </div>
    );
  }
}

export default App;
