import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import CreatePoll from "./Pages/createPoll";
import Poll from "./Pages/Poll";
import Results from "./Pages/Results";
import './styles/Global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePoll />} />
        <Route path="/poll/:id" element={<Poll />} />
        <Route path="/results/:id" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
