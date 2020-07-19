import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Welcome1, Welcome2} from './components/Welcome';
import { Clock } from './components/Clock';
import { StateTestHook } from './components/StateTestHook';
import { StateTest } from './components/StateTest';
import  CartSample  from './components/CartSample';
import Lifecycle from './components/Lifecycle';

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

class App extends Component{
  state = {prop: 'some prop'}

  componentDidMount(){
    setTimeout(()=> {
      this.setState({prop: ''})
    },3000)
  }

  render(){
    const name = 'jerry';
    const user = {firstName: 'jack',lastName: 'jerry'}
    return (
      <div className="content">
        {/* 表达式 */}
        <h1>{name}</h1>
        <h1>{formatName(user)}</h1>
        {/* 属性*/}
        <img src={logo} style={{width:'100px'}}/>

        {/* jsx也是表达式 */}
        {/* jsx */}


        {/* 使用其他组件 */}
        {/* <Welcome1 name="hello, react"></Welcome1> */}
        {/* <Welcome2 name="hello, react"></Welcome2>  */}

        {/* State和状态setState */}
        <Clock></Clock>
        <StateTest></StateTest>

        {/* Hooks */}
        <StateTestHook></StateTestHook>

        {/*  条件渲染--列表循环*/}
        <CartSample title="购物车"></CartSample>

        {/* 生命周期 */}
     {this.state.prop? <Lifecycle name={this.state.prop}></Lifecycle> : null} 
      </div>
    )
  }
}

export default App;
