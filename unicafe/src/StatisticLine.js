
const StatisticLine = ({ type, value }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{value}{type === "positive" && "%"}</td>
    </tr>
  );
};

export default StatisticLine;