import React from 'react';
import ListCharacterProvider from './context/ListCharacter';
import Routes from './routes';
import './global.css';

function App() {
  return (
    <ListCharacterProvider>
      <Routes />
    </ListCharacterProvider>
  );
}

export default App;
