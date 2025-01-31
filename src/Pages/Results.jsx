import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Results() {
  let { id } = useParams();
  const [poll, setPoll] = useState(null);

  useEffect(() => {
    const storedPoll = JSON.parse(localStorage.getItem(id));
    if (storedPoll) {
      setPoll(storedPoll);
    }
  }, [id]);

  return (
    <div>
      {poll ? (
        <>
          <h1>Results for: {poll.question}</h1>
          {poll.options.map((opt, index) => (
            <p key={index}>{opt.text}: {opt.votes} votes ({((opt.votes / poll.options.reduce((acc, cur) => acc + cur.votes, 0)) * 100).toFixed(2)}%)</p>
          ))}
        </>
      ) : (
        <p>Loading results...</p>
      )}
    </div>
  );
}
export default Results;