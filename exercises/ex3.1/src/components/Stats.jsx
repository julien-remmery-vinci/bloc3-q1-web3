import StatsLine from "./StatsLine";

const Stats = ({good, neutral, bad}) => {
  return (
    <div>
        <h1>Statistics</h1>
        {good + neutral + bad !== 0 ? (
            <table>
                <tbody>
                    <StatsLine text="good" value={good} />
                    <StatsLine text="neutral" value={neutral} />
                    <StatsLine text="bad" value={bad} />
                    <tr>
                        <td>all</td>
                        <td>{good + neutral + bad}</td>
                    </tr>
                    <tr>
                        <td>average</td>
                        <td>{(good - bad) / (good + neutral + bad) || 0}</td>
                    </tr>
                    <tr>
                        <td>positive</td>
                        <td>{good / (good + neutral + bad) * 100 || 0} %</td>
                    </tr>
                </tbody>
            </table>
        ) : <p>No feedback</p>}
      </div>
  );
};

export default Stats;
