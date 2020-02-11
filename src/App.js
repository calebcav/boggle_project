import React, {useState} from 'react';
import './App.css';
import Randomboard, { RandomGrid } from './BoilerPlate.js';
import TextField from '@material-ui/core/TextField';
import findAllSolutions from './boggle_solver.js';
import dictionary from './full-wordlist.js';
import LoginButton from './LoginButton.js';
import TextInput from './TextInput.js';
import GetGrid from './GrabGrid.js';
import convertStringToGrid from './StringGrid.js';
import LeaderBoards from './ShowScores.js';


function App() {


  const [validWords, setValidWords] = useState([]);
  const [showBoard, setShowBoard] = useState(false);
  const [board, setBoard] = useState(RandomGrid());
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("Welcome to Boggle");
  const [user, setUser] = useState(null);
  const [challenges, loadChallenges] = useState(false);
  const [score, setScore] = useState(0);
 
const grids = GetGrid();
  


  function showButton() {
      if (showBoard) {
          return "Hide Board"
      }
      else {
          return "Show Board"
      }
  }

  function evaluateInput() {
    if (validWords.includes(input)){
        setMessage("You already said " + input);
    }
    else if (findAllSolutions(board, [input]).length === 1 && dictionary.includes(input)){
        setMessage("You chose " + input);
        setValidWords([...validWords, input]);
    }
    else {
        setMessage(input + " is not a valid word");
    }
  }

  function keyPress(e) {
      if (e.key === 'Enter'){
       evaluateInput();
      }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img class="center" src="https://process.filestackapi.com/cache=expiry:max/Z0nJduh9TuaBX3IQmbky"></img>
        <LoginButton setUser = {(user) => setUser(user)}/>
        {user != null &&
        <body>
        {showBoard &&
        <div id="board">
            <div class="row">
                <div class="boggle">
                    <span>{board[0][0]}</span>
                </div> 
                <div class="boggle">
                    <span>{board[0][1]}</span>
                </div> 
                <div class="boggle">
                    <span>{board[0][2]}</span>
                </div> 
                <div class="boggle">
                    <span>{board[0][3]}</span>
                </div> 
                <div class="boggle">
                    <span>{board[0][4]}</span>
                </div>
            </div>
            <div class="row">
                <div class="boggle">
                    <span>{board[1][0]}</span>
                </div> 
                <div class="boggle">
                    <span>{board[1][1]}</span>
                </div> 
                <div class="boggle">
                    <span>{board[1][2]}</span>
                </div> 
                <div class="boggle">
                    <span>{board[1][3]}</span>
                </div> 
                <div class="boggle">
                    <span>{board[1][4]}</span>
                </div>
            </div>
            <div class="row">
                <div class="boggle">
                    <span>{board[2][0]}</span>
                </div> 
                <div class="boggle">
                    <span>{board[2][1]}</span>
                </div> 
                <div class="boggle">
                    <span>{board[2][2]}</span>
                </div> 
                <div class="boggle">
                    <span>{board[2][3]}</span>
                </div> 
                <div class="boggle">
                    <span>{board[2][4]}</span>
                </div>
            </div>
            <div class="row">
                <div class="boggle">
                    <span>{board[3][0]}</span>
                </div> 
                <div class="boggle">
                    <span>{board[3][1]}</span>
                </div> 
                <div class="boggle">
                    <span>{board[3][2]}</span>
                </div> 
                <div class="boggle">
                    <span>{board[3][3]}</span>
                </div> 
                <div class="boggle">
                    <span>{board[3][4]}</span>
                </div>
            </div>
            <div class="row">
                <div class="boggle">
                    <span>{board[4][0]}</span>
                </div> 
                <div class="boggle">
                    <span>{board[4][1]}</span>
                </div> 
                <div class="boggle">
                    <span>{board[4][2]}</span>
                </div> 
                <div class="boggle">
                    <span>{board[4][3]}</span>
                </div> 
                <div class="boggle">
                    <span>{board[4][4]}</span>
                </div>
            </div>
        </div>
        }     

        <button class = "button center"onClick={() => setShowBoard(!showBoard)}> {showButton()} </button>
        <button class = "random center" onClick={() => setBoard(Randomboard())}>randomize board!</button>
        <p class="center">
            {message}
        </p>
        { validWords.length > 0 &&
            <p>Correct Answers: </p>
        }
        <ul>

            {validWords.map((word) => {
                return (
                <li key={word}>{word}</li>
                );
            })}
        </ul>
        <p class="center">
        <TextField onKeyPress={(e) => keyPress(e)} onChange={(event) => setInput(event.target.value)}/>
        <TextInput promptText="username" field="name" user={user}/>
        <LeaderBoards />
        <button onClick={() => loadChallenges(true) }> Load Challenges</button>
        </p>
        <p>
            { challenges &&
            <div>
                 <button class="button" onClick={() => setBoard(convertStringToGrid(grids[0]))}>
                Grid 1
            </button>
            <button class="button" onClick={() => setBoard(convertStringToGrid(grids[1]))}>
            Grid 2
            </button>
            <button class="button" onClick={() => setBoard(convertStringToGrid(grids[2]))}>
            Grid 3
            </button>
            <button class="button" onClick={() => setBoard(convertStringToGrid(grids[3]))}>
            Grid 4
            </button>
            <button class="button" onClick={() => setBoard(convertStringToGrid(grids[4]))}>
            Grid 5
            </button>
            </div>
            }
        </p>

        
        <script src="/__/firebase/7.8.0/firebase-app.js"></script>

        <script src="/__/firebase/7.8.0/firebase-analytics.js"></script>

        <script src="/__/firebase/init.js"></script>
        </body>
}
      </header>
    </div>
  );
}

export default App;