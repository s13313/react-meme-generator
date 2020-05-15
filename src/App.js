import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Form from './components/Form';
// import Loading form ./Loading

function App() {
  const [textAbove, setTextAbove] = useState('meme comes');
  const [textBelow, setTextBelow] = useState('here');
  const [selected, setSelected] = useState('');
  const [list, setList] = useState([]);
  const [name, setName] = useState([]);

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
        const namePromise = Object.keys(result);
        setList(urlPromise);
        setName(namePromise);
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
        <select className="select-css" onChange={onChangeSelect}>
          {list.map(function mapping(url, i) {
            return (
              <option value={url.replace('/api/templates', '')}>
                "{name[i]}" ---> {url.replace('/api/templates', '')}
              </option>
            );
          })}
        </select>
        <br />
        <img src={finalUrl} alt=""></img>
        <br />
        <a href={finalUrl} target="_blank" rel="noopener noreferrer">
          <button className="button">
            <i className="fas fa-download" />
            Download Your Meme
          </button>
        </a>

        <br />
        <br />
      </header>
    </div>
  );
}
export default App;
