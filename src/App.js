import React from 'react';
import PersonAdd from './PersonAdd.js';
import PersonList from './PersonList.js'
import PersonRemove from './PersonRemove.js';

function App() {
  
  return <div>
    <PersonList />
    {/* <PersonRemove/> */}
    <PersonAdd/>
    </div>;
}

export default App;
