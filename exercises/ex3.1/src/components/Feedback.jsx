const Feedback = ({ handleGood, handleNeutral, handleBad }) => {
    return (
        <div>
            <h1>Give feedback</h1>
            <button onClick={handleGood}>Good</button>
            <button onClick={handleNeutral}>Neutral</button>
            <button onClick={handleBad}>Bad</button>
        </div>
    );
}

export default Feedback;