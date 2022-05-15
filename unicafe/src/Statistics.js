import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = ((good + bad * -1) / total).toFixed(1);
  const positive = ((good * 100) / total).toFixed(1);
  if (total) {
    return (
      <>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticLine type={"good"} value={good} />
            <StatisticLine type={"neutral"} value={neutral} />
            <StatisticLine type={"bad"} value={bad} />
            <StatisticLine type={"all"} value={total} />
            <StatisticLine type={"average"} value={average} />
            <StatisticLine type={"positive"} value={positive} />
          </tbody>
        </table>
      </>
    );
  }
  else {
    return <p>No feedback given</p>
  };
};

export default Statistics;