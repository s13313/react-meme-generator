import React, { useState } from 'react';
import '../index.css';

export default function Form(props) {
  // Controlled Component
  // Step 1: Declare a state variable
  const [textAbove, setTextAbove] = useState('');
  const [textBelow, setTextBelow] = useState('');
  // const [imageUrl, setImageUrl] = useState('');

  const onChangeAbove = (event) => {
    // Step 2: Update the value with whatever the user types in the box
    setTextAbove(event.target.value);
  };

  const onChangeBelow = (event) => {
    // Step 2: Update the value with whatever the user types in the box
    setTextBelow(event.target.value);
  };
  return (
    <div>
      <h1>Generate your meme here</h1>
      <hr />
      <h3>choose your image</h3>
      {/* <choose your image here> */}
      <select className="select-css">
        <option value="Link1">Grapefruit</option>
        <option value="Link2">Lime</option>
        <option selected value="Link3">
          Coconut
        </option>
        <option value="Link4">Mango</option>
      </select>
      <br />
      <input
        className="input"
        type="input"
        placeholder="This text appears above"
        onChange={onChangeAbove}
      />
      <br />
      <input
        className="input"
        type="input"
        placeholder="This text appears below"
        onChange={onChangeBelow}
      />
      <br />
      <button
        className="button"
        type="button"
        onClick={() => props.onSubmit(textAbove, textBelow)}
      >
        Generator
      </button>
    </div>
  );
}
