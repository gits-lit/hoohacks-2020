import React from 'react';

import Deck from "./components/Deck";
import data from "./data.js";

function App() {
  return (
    <Deck data={data}/>
  );
}

export default App;
