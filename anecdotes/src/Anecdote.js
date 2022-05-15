
const Anecdote = ({ title, anecdote }) => {
  return (
    <>
      <h2>Anecdote {title}</h2>
      <p>{anecdote}</p>
    </>
  );
};

export default Anecdote;