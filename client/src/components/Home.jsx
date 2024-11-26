import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: '10px' }}>
      <p>Home page</p>
      <Link to="/profile" style={{ padding: '10px', margin: '5px 0' }}>Profile</Link>
      <Link to="/create-task" style={{ padding: '10px', margin: '5px 0' }}>Create Task</Link>
      <Link to="/tasks" style={{ padding: '10px', margin: '5px 0' }}>Show Tasks</Link>
    </div>
  );
}

export default Home;