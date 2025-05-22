import "./index.css"
import Player from './components/player/Player';
import GameBoard from "./components/board/GameBoard"
import { useState } from 'react';
import MoveHistory from './components/history/MoveHistory';
import {combinations} from './components/winner/WinnningCombination'
import Result from './components/winner/Result';

const board = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

function getCurrentSymbol(moves)
{
    let symbol = 'X'

    if(moves.length!==0 && moves[0].currsymbol==='X')
    {
      symbol = 'O'
    }

    return symbol
}

function getWinner()
{
  for(let combination of combinations)
  {
     let symbol1 = board[combination[0].row][combination[0].col]
     let symbol2 = board[combination[1].row][combination[1].col]
     let symbol3 = board[combination[2].row][combination[2].col]
    
     if(symbol1 && symbol1===symbol2 && symbol1===symbol3)
     {
        return symbol1
     }

  }
    return null;
}



function App() 
{

  const[moves,setMoves] = useState([])
  const[player1,setPlayer1] = useState('Player 1')
  const[player2,setPlayer2] = useState('Player 2')

  let cSymbol = getCurrentSymbol(moves)

  let WINNER = getWinner();

  let DRAW = (!WINNER && moves.length===9) ? true : false

  for(let move of moves)
  {
    board[move.pos.row][move.pos.col] = move.currsymbol
  }


  function updateCurrMove(rowIndex,colIndex)
  {
    setMoves((moves)=>{return [{pos:{row:rowIndex,col:colIndex},currsymbol:cSymbol},...moves]})
  }


  function updatePlayer(player,symbol)
  {
     symbol === 'X' ? setPlayer1(player) :setPlayer2(player);
  }

  return (
    <>
      <section>
      <menu>
        {WINNER || DRAW ? <Result winner={WINNER && WINNER==='X'?player1:player2}/> :
        <div className="game-container">
          <ol id="players">
            <Player name={player1} symbol="X" isActive={cSymbol==="X"} nameUpdate={updatePlayer}/>
            <Player name={player2} symbol="O" isActive={cSymbol==="O"} nameUpdate={updatePlayer}/>   
            <GameBoard currBoard={board} updateMove={updateCurrMove} />
          </ol>
        </div>}
      </menu>
      <menu>
        <div className="move-history">
            <MoveHistory currMove={moves}/>
        </div>
      </menu>
    </section>
    
    </>
  );
}

export default App;
