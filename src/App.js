import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Message from './components/Message';


function App() {
  return (
    <div className="App">
      {/* <Message/> */}
     <Header/>
     <Home/>
       
    </div>
  );
}

export default App;
