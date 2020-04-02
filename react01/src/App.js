import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Welcome1 } from './components/Welcome';
import { Clock } from './components/Clock';
import { StateTestHook } from './components/StateTestHook';
import { StateTest } from './components/StateTest';
import { CartSample } from './components/CartSample';

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

class App extends Component{
 
  render(){
    const name = 'jerry';
    const user = {firstName: 'jack',lastName: 'jerry'}
    return (
      <div class="content">
        {/* 表达式 */}
        <h1>{name}</h1>
        <h1>{formatName(user)}</h1>
        {/* 属性*/}
        <img src={logo} style={{width:'100px'}}/>

        {/*jsx也是表达式*/}
        {/* {jsx} */}


        {/*使用其他组件 */}
        <Welcome1 name="hello, react"></Welcome1>
}

        {/* State和状态setState */}d
        <Clock></Clock>
        <StateTest></StateTest>
        <StateTestHook></StateTestHook>
        <CartSample></CartSample>
      </div>
    )
  }
}

export default App;
