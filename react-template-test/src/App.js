import React from 'react';
import Provider from './database/Provider';
import Routes from './Routes';

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
