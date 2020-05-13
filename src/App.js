import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import imageFetch from './fetch.js';

function App() {
  useEffect(imageFetch, []);
  const [textAbove, settextAbove] = useState('');
  const [textBelow, settextBelow] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <Form
          onSubmit={function onSubmit(textAbove, textBelow) {
            alert('Thanks for submitting ' + textAbove + ' ' + textBelow);
          }}
        />
        <br />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download your meme here
        </a>
        <br />
        <div>
          <img src="https://memegen.link/buzz/we_are/awesome.jpg"></img>
        </div>
      </header>
    </div>
  );
}

export default App;
