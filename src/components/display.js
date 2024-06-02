import React from 'react';  // This is used to import the react library

const Display = ({ value }) => { // This is a functional component that renders the display
  return (
    <input id="display" value={value} readOnly /> //renders an input value with readOnly attribute
  );
};

export default Display; //This exports the display.js file for use of other files
