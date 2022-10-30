import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //메인 페이지에 들어갈 HTML 짜는곳

  //HTML 처럼 생긴 JSX
  let [글제목, b] = useState('스트링');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{글제목}</p>
      </header>
    </div>
  );
}

export default App;
