import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [state, setState] = useState('');
  const navigate = useNavigate();

  function changePage() {
    navigate('/dashboard');
  }

  return (
    <div>
      This is the state {state}
      <button onClick={changePage}>Dashboard</button>
    </div>
  );
}

export default HomePage;
