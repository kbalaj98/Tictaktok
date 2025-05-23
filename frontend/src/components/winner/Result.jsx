function Result({winner,rematch})
{
    let resultCss = {
        color:"green"
    }

    return <div className="result-container">

        {winner && <p>Winner of the Game is <span style={resultCss}>{winner}</span></p>}
        {!winner && <p>Game is <span style={resultCss}>Draw!!!!!!  </span></p>}
        <center><button onClick={rematch}>Rematch</button></center>
    </div>
}

export default Result