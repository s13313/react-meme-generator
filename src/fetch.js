import React, { useState, Component } from 'react';

export default function imageFetch(props) {
  let list = [];
  fetch('https://memegen.link/templates')
    .then((res) => res.json())
    .then((result) => {
      list = Object.values(result);
      console.log(list[1]);
    });
  //this return weather infos to App.js
  return list;
}
