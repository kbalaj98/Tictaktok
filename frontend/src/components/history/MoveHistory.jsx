
function MoveHistory({currMove})
{
    
    return <ol>
        {currMove.length !==0 && currMove.map((data)=>(
             <li>{`row = ${data.pos.row} col=${data.pos.col} symbol=${data.currsymbol}`}</li>
        ))}
    </ol>
}

export default MoveHistory