import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <p>welcome to taskrabbit</p>
       <div>
        <Link to="/register">Register</Link>
       </div>
       <div>
        <Link to="/login">Login</Link>
       </div>
    </div>
  );
}

export default App;
