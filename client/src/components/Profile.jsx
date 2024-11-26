import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [showTasks, setShowTasks] = useState(false);

  const getUserData = async () => {
    const token = localStorage.getItem('token');
    const newUser = await axios.get('http://localhost:3001/user', {
      headers: {
        'x-auth-token': token
      }
    });
    console.log(newUser);
    setUser(newUser.data);
  }

  const getUserTasks = async () => {
    const token = localStorage.getItem('token');
    const userTasks = await axios.get('http://localhost:3001/tasks', {
      headers: {
        'x-auth-token': token
      }
    });
    console.log(userTasks);
    setTasks(userTasks.data);
  }

  useEffect(() => {
    getUserData();
    console.log(user);
  }, []);

  const handleShowTasks = () => {
    setShowTasks(!showTasks);
    if (!showTasks) {
      getUserTasks();
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', gap: '10px' }}>
      <div>
        <span>username: </span>
        <span>{user?.username}</span>
      </div>
      <div>
        <span>email: </span>
        <span>{user?.email}</span>
      </div>
      <button onClick={handleShowTasks} style={{ padding: '10px 20px', margin: '10px 0' }}>
        {showTasks ? 'Hide Tasks' : 'Show Tasks'}
      </button>
      {showTasks && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          {tasks.map(task => (
            <div key={task._id} style={{ padding: '10px', border: '1px solid black', width: '200px' }}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Profile;