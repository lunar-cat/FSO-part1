import { useState } from 'react';
import Anecdote from './Anecdote';
import Button from './Button';
import Votes from './Votes';

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});
  const selectNext = () => {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * anecdotes.length);
    } while (randomNumber === selected);
    setSelected(randomNumber);
  };
  const vote = () => {
    const currentVotes = votes[selected] || 0;
    setVotes({ ...votes, [selected]: currentVotes + 1 });
  };
  // sort {index: votes} => [index, votes][] => b[1] - a[1] => first[index, votes][0]
  let mostVotedAnecdote = 0;
  if (Object.keys(votes).length) {
    mostVotedAnecdote = Object.entries(votes).sort((a, b) => b[1] - a[1])[0][0];
  };
  return (
    <div className="App">
      <Anecdote title={"of the day"} anecdote={anecdotes[selected]} />
      <Votes votes={votes[selected] || 0} />
      <Button handleClick={vote} text={"Vote"} />
      <Button handleClick={selectNext} text={"Next"} />

      <Anecdote title={"with most votes"} anecdote={anecdotes[mostVotedAnecdote]} />
      <Votes votes={votes[mostVotedAnecdote] || 0} />
    </div>
  );
}

export default App;
