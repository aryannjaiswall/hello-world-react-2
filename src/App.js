import './App.css';
import React, { Component } from 'react'
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import ClickCounter2 from './components/ClickCounter2';
// import HoverCounter2 from './components/HoverCounter2';
// import User from './components/User';
// import Counter from './components/Counter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

class App extends Component {
  render() {
    return (
      <div>

        <UserProvider value="Aryan">
        <ComponentC />
        </UserProvider>

        {/* <HoverCounter2 />
        <ClickCounter2 />
        <User render = {(isLoggedIn) => isLoggedIn ? 'Aryan' : 'Guest'}/> */}
        {/* <Counter 
          render = {(count, incrementCount) => (
            <ClickCounter2 count = {count} incrementCount={incrementCount} />
          )}
          />
        <Counter 
          render = {(count, incrementCount) => (
            <HoverCounter2 count = {count} incrementCount={incrementCount} />
          )}
          /> */}
        {/* <HoverCounter />
        <ClickCounter name='Aryan'/> */}
      </div>
    )
  }
}

export default App
