import React from 'react';

const Key = ({ onClick, className, children, style }) => { //This is a functional component that renders a button
  return (
    <button onClick={onClick} className={className} style={style}> 
      {children}
    </button>
    // The above lines of code will render a button element with onClick, className, and style props
    // The button label is provided by the childern prop
  );
};

export default Key; // Exports the key.js file for use in other files
