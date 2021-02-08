import React from 'react';
import IncreaseCounter from './component/IncreaseCounter';
import DecreaseCounter from './component/DecreaseCounter'
import IncreaseByTwoCounter from './component/IncreaseByTwoCounter'
import Counter from './component/Counter'

function App() {
  return (
    <div >
      <Counter/>
      <IncreaseCounter/>
      <DecreaseCounter/>
      <IncreaseByTwoCounter/>

    </div>
  );
}

export default App;
