import React from 'react';
import ListCharacterProvider from './context/ListCharacter';
import Main from './pages/Main';

import './global.css';

function App() {
  return (
    <ListCharacterProvider>
      <Main />
    </ListCharacterProvider>
  );
}

export default App;
