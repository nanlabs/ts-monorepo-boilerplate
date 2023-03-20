import React from 'react';
import logo from '@/assets/img/logo.svg';
import '@/newtab/Newtab.css';
import '@/newtab/Newtab.scss';

const Newtab = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/newtab/Newtab.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React!
        </a>
        <h6>The color of this paragraph is defined using SASS.</h6>
      </header>
    </div>
  );
};

export default Newtab;
