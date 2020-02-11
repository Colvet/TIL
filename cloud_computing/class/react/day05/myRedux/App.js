import React from 'react';
import './App.css';
import BookList from './containers/BookList';
import BookDetail from './containers/BookDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <BookList/>
        <BookDetail/> 
      </header>
    </div>
  );
}

export default App;
