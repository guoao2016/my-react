import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Welcome1 } from './components/CompType';
import { Clock } from './components/Clock';
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
      <div>
        {/* 表达式 */}
        <h1>{name}</h1>
        <h1>{formatName(user)}</h1>
        {/* 属性*/}
        <img src={logo} style={{width:'100px'}}/>

        {/*jsx也是表达式*/}
        {/* {jsx} */}


        {/*使用其他组件 */}
        <Welcome1 name ="some content"></Welcome1>
        {/* <Welcome2 name ="some content">></Welcome2> */}

        {/* State和状态setState */}
        <Clock></Clock>
        <StateTest></StateTest>
        <CartSample></CartSample>
      </div>
    )
  }
}

export default App;
