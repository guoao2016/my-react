import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Welcome1, Welcome2 } from './components/CompType';
import Clock from './components/Clock'
import StateTest from './components/StateTest';
import CartSample from './components/CartSample';


// import { Welcome2, Welcome1 } from './components/ComType';
// import Clock from './components/Clock';
// import StateTest from './components/StateTest';


function formatName(user){
  return user.firstName + ' ' + user.lastName;
} 

class App extends Component{
  render(){
    const name = 'jerry';
    const user = {firstName: 'tom', lastName: 'jerry'};
    const jsx = <p>hello, jerry</p>;
    return(
      
      <div>
        {/* 表达式 */}
        {/* <h1>{name}</h1> */}
        {/* <h1>{formatName(user)}</h1> */}

        {/* 属性 */}
        {/* <img src={logo} style={{width:'100px'}} /> */}

        {/* jsx也是表达式 */}
        {/* {jsx} */}

        {/* 使用其他组件 */}
        {/* <Welcome1 name ="some content"></Welcome1> */}
        {/* <Welcome2 name ="some content"></Welcome2> */}

        {/* state和setState */}
        {/* <Clock></Clock> */}
        {/* <StateTest></StateTest> */}

        {/* 条件渲染 */}
        <CartSample></CartSample>
      </div>
    )
  }
}

export default App;
