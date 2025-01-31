import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Poll() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [poll, setPoll] = useState(null);

  useEffect(() => {

    const storedPoll = JSON.parse(localStorage.getItem(id));
    if (storedPoll) {
      setPoll(storedPoll);
    }
  }, [id]);

  const handleVote = (index) => {
    const updatedPoll = { ...poll };
    updatedPoll.options[index].votes += 1;
    localStorage.setItem(id, JSON.stringify(updatedPoll));
    setPoll(updatedPoll);
  };

  return (
    <div>
      {poll ? (
        <>
          <h1>{poll.question}</h1>
          {poll.options.map((opt, index) => (
            <button key={index} onClick={() => handleVote(index)}>
              {opt.text} ({opt.votes} votes)
            </button>
          ))}
          <button onClick={() => navigate(`/results/${id}`)}>View Results</button>
        </>
      ) : (
        <p>Loading poll...</p>
      )}
    </div>
  );
}
export default Poll;
