import React from 'react';
import ListCharacterProvider from './context/ListCharacter';
import LoadingContextProvider from './context/Loading';
import Routes from './routes';
import './global.css';

function App() {
  return (
    <ListCharacterProvider>
      <LoadingContextProvider>
        <Routes />
      </LoadingContextProvider>
    </ListCharacterProvider>
  );
}

export default App;
