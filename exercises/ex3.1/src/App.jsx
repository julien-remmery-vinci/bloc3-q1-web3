import Feedback from "components/Feedback";
import Loading from "components/Loading";
import Stats from "components/Stats";
import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
      setLoading(false);
  }, 3000);

  if (loading) {
    return <Loading />;
  }

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
        <Feedback handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad} />
        <Stats good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  );
};

export default App;