import React, { useState } from 'react';
import axios from 'axios';

function CreateTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = { title, description };
      await axios.post('http://localhost:3001/tasks', newTask);
      setTitle('');
      setDescription('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '10px', margin: '5px 0', width: '200px' }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: '10px', margin: '5px 0', width: '200px' }}
      />
      <button type="submit" style={{ padding: '10px 20px', margin: '10px 0' }}>Create Task</button>
    </form>
  );
}

export default CreateTask;