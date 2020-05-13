// import React, { useState, useEffect } from 'react';

// export default fetching (props) {

// const [imageUrl, setImageUrl] = useEffect(null);

// useEffect(async () => {
//   const response = await fetch("https://memegen.link/")
//   const data = response.json();
//   const[item] = data.result;
//   setImageUrl(item);
//   console.log(item)

// });
// };
import React, { Component } from 'react';

export default function imageFetch(props) {
  fetch('https://memegen.link/templates')
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    });
  //this return weather infos to App.js
  return;
}
