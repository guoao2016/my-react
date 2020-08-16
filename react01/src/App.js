import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Welcome2, Welcome1 } from './components/ComType';
import Clock from './components/Clock';
import StateTest from './components/StateTest';


function formatName(user){
  return user.firstName + ' ' + user.lastName;
} 

class App extends Component{
  render(){
    const name = 'jerry';
    const user = {firstName: 'tom', lastName: 'jerry'}
    const jsx = <p>hello, jerry</p>
    return (
      <div>
        {/* 表达式 */}
        {/* <h1>{name}</h1> */}
        {/* <h1>{formatName(user)}</h1> */}

        {/* 属性 */}
        {/* <img src={logo} style={{width: '100px'}} /> */}

        {/* jsx也是表达式 */}
        {/* {jsx} */}

        {/* <Welcome1 name="some content1"></Welcome1> */}
        {/* <Welcome2 name="some content2"></Welcome2> */}


        {/* state setState */}
        {/* <Clock></Clock> */}

        <StateTest></StateTest>
      </div>
    )
  }
}

export default App;
