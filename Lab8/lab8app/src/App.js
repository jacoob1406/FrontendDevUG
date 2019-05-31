import React, { Fragment } from 'react';
import Games from './components/Games/Games';
import AppHeading from './components/AppHeading/AppHeading';

function App() {
  return (
    <Fragment>
      <AppHeading />
      <Games />
    </Fragment>
  );
}

export default App;
