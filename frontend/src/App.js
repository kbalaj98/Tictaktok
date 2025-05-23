import "./index.css"
import Player from './components/player/Player';
import GameBoard from "./components/board/GameBoard"
import { useState } from 'react';
import MoveHistory from './components/history/MoveHistory';
import {combinations} from './components/winner/WinnningCombination'
import Result from './components/winner/Result';

const INITIAL_BOARD = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

const PLAYERS={
  X: "Player 1",
  O: "Player 2"
}

function getCurrentSymbol(moves)
{
    let symbol = 'X'

    if(moves.length!==0 && moves[0].currsymbol==='X')
    {
      symbol = 'O'
    }

    return symbol
}

function getWinner(board)
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

function derivedBoard(moves)
{
  const board = [...INITIAL_BOARD.map((arr)=>[...arr])]

  for(let move of moves)
  {
    board[move.pos.row][move.pos.col] = move.currsymbol
  }

  return board
}



function App() 
{

  const[moves,setMoves] = useState([])
  const[players,setPlayers] = useState(PLAYERS)

  let cSymbol = getCurrentSymbol(moves)
  const board = derivedBoard(moves)

  let WINNER = getWinner(board);
  let DRAW = (!WINNER && moves.length===9) ? true : false

  function gameReset()
  {
    setMoves([])
  }

  function updateName(symbol,name)
  {
     setPlayers(players=>{
         return {
            ...players,
            [symbol]:name
         }
     })
  }


  function updateCurrMove(rowIndex,colIndex)
  {
    setMoves((moves)=>{return [{pos:{row:rowIndex,col:colIndex},currsymbol:cSymbol},...moves]})
  }


  return (
    <>
      <section>
      <menu>
         
        <div className="game-container">
          <ol id="players">
            <Player name={PLAYERS.X} symbol="X" isActive={cSymbol==="X"} nameUpdate={updateName}/>
            <Player name={PLAYERS.O} symbol="O" isActive={cSymbol==="O"} nameUpdate={updateName}/>   
            <GameBoard currBoard={board} updateMove={updateCurrMove} />
          </ol>
        </div>
        {(WINNER || DRAW )? <Result winner={WINNER && WINNER==='X'?players.X:DRAW?null:players.O} rematch={gameReset}/> : null}
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
