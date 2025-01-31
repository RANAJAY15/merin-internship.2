import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePoll() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (question.trim() && options.every(opt => opt.trim())) {
      const pollId = Math.random().toString(36).substr(2, 9);
      const pollData = { id: pollId, question, options: options.map(opt => ({ text: opt, votes: 0 })) };
      localStorage.setItem(pollId, JSON.stringify(pollData));
      navigate(`/poll/${pollId}`);
    }
  };

  return (
    <div className="container">
      <h1>Create a Poll</h1>
      <input className="input" type="text" placeholder="Enter question" value={question} onChange={(e) => setQuestion(e.target.value)} />
      {options.map((option, index) => (
        <input key={index} className="input" type="text" placeholder={`Option ${index + 1}`} value={option} onChange={(e) => {
          const newOptions = [...options];
          newOptions[index] = e.target.value;
          setOptions(newOptions);
        }} />
      ))}
      <button className="button" onClick={handleSubmit}>Create Poll</button>
    </div>
  );
}
export default CreatePoll;
