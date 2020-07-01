import React from 'react';
import Header from './component/header/index';
import Headline from './component/headline/index';
import './../src/app.scss'

const tempArr = [{
  fName: 'Joe',
  LName: 'Bloggs',
  email: 'joe@gmail.com',
  age: 24,
  onlineStatus: true
}]

function App() {
  return (
    <div className="App">
      <Header />
      <section className='main'>
        <Headline header='Posts' desc='Click the button' tempArr={tempArr}/>
      </section>  
    </div>
  );
}

export default App;