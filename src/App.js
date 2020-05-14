import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Form from './components/Form';

function App() {
  const [textAbove, setTextAbove] = useState('meme comes');
  const [textBelow, setTextBelow] = useState('here');
  const [selected, setSelected] = useState('https://memegen.link/afraid');
  const [list, setList] = useState([]);
  const finalUrl = selected + '/' + textAbove + '/' + textBelow + '.jpg';
  const onChangeSelect = (event) => {
    // Update the value with whatever the user types in the box
    setSelected(event.target.value);
  };
  //this fetch gets the Url list of images from website
  useEffect(function fetching() {
    fetch('https://memegen.link/templates')
      .then((res) => res.json())
      .then((result) => {
        const urlPromise = Object.values(result);
        setList(urlPromise);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* this is Form component which gives you the text above and below */}
        <Form
          textAbove={textAbove}
          textBelow={textBelow}
          setTextAbove={setTextAbove}
          setTextBelow={setTextBelow}
          onSubmit={function onSubmit(textAbove, textBelow) {
            alert('ARE YOU READY TO SEE YOUR MEME??');
          }}
        />
        <br />
        <h3>choose your image</h3>
        {/* <you can choose your image here using map to get into every image> */}
        <select id="dropdown" className="select-css" onChange={onChangeSelect}>
          {list.map(function mapping(url) {
            return (
              <option value={url.replace('/api/templates', '')}>
                {url.replace('/api/templates', '')}
              </option>
            );
          })}
        </select>
        <br />
        <img src={finalUrl} alt="can't be loaded"></img>
        <br />
        <button
          className="button"
          href={finalUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download your meme here
        </button>
        <br />
        <br />
      </header>
    </div>
  );
}
export default App;
