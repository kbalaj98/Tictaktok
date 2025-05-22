function Result({winner})
{
    return <div className="result-container">

        {winner && <p>Winner of the Game is {winner}</p>}
        {!winner && <p>Game is Draw!</p>}

    </div>
}

export default Result