import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);

  const removeBday = (id) => {
    const newBday = people.filter((bday) => bday.id !== id);
    setPeople(newBday);
  };

  if (people.length === 0){
    return <main>
    <div className='container'>
      <p style={{textAlign:'center'}}>Refresh to get data again</p>
      <button className='btn' onClick={()=> setPeople(data)}>Refresh</button>
    </div>; 
    </main>
  }

  return (
    <main>
      <div className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} removeBday={removeBday} />
        <button
          className="btn"
          onClick={() => {
            setPeople([]);
          }}
        >
          clear all
        </button>
      </div>
    </main>
    );
  
}

export default App;
