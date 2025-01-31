import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <h1>Interactive Polling App</h1>
      <Link to="/create">Create a Poll</Link>
    </div>
  );
}
export default Home