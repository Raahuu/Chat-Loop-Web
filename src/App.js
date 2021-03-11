import React from 'react';

import API from './API'

const App = () => {
  return (
    <div>
      <h1 onClick={() => API.get('/random')}>Chat Loop</h1>
    </div>
  );
}

export default App;
