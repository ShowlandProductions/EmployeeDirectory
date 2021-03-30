import React from 'react';
import Body from './components/Body';
import Container from './components/Container';
import Header from './components/Header';
import "./App.css";

function App() {
  return (
    <div className="App">
   <Container>
     <Header />
     <Body />
   </Container>
    </div>
  );
}

export default App;
