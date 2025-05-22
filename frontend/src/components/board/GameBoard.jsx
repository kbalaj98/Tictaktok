

export default function GameBoard({currBoard,updateMove})
{

    function handleClick(rowIndex,colIndex)
    { 
        if(currBoard[rowIndex][colIndex] !== null){
            return
        }  
        
        // setGameBoard((previousBoard)=>{
        //     const tempBoard = [...previousBoard.map(arr=>{return [...arr]})]
        //     tempBoard[rowIndex][colIndex] = currPlayerSymbol

        //     return tempBoard;
        // })

       // updateMove(`Player ${currPlayerSymbol==='X'?1:2} clicked row=${rowIndex+1} col=${colIndex+1}`)

       updateMove(rowIndex,colIndex)
    }

   


    return <ol className="game-board">

        {currBoard.map((row,rowIndex)=>{
            return    <li key={rowIndex}>
                <ol className="game-board-row">  
                    { row.map((val,colIndex)=>{
                        return <button className="board-cell" onClick={()=>handleClick(rowIndex,colIndex)}>{val===null?"   ":val}</button>
                    })}
                </ol>
            </li>
        })}
    </ol>
}