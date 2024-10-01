import FeedbackButtons from "components/FeedbackButtons";
import Stats from "components/Stats";
import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    const newGood = good + 1;
    setGood(newGood);
  };

  const handleNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
  };

  const handleBad = () => {
    const newBad = bad + 1;
    setBad(newBad);
  };

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <FeedbackButtons handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad} />
      </div>
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;