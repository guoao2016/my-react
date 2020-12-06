import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AntdTest from './components/AntdTest';
import ComponentList from './components/ComponentList';
import Hoc from './components/Hoc';
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

class App extends Component{
  render(){
    const name = 'jerry'
    const user = {firstName: 'tom', last: 'jerry'};
    const jsx = <p>hello, jerry</p>;
    return (

      <div className="content">
        {/* 表达式 */}
        {/* <h1>{name}</h1> */}
        {/* <h2>{formatName(user)}</h2> */}
        {/* 属性 */}
        {/* <img src={logo} style={{width:'100px'}} alt="logo"/> */}

        {/* Antd */}
        {/* <AntdTest></AntdTest> */}
        
        {/* 展示组件和容器组件 */}
        {/* <ComponentList></ComponentList> */}

        {/* 高阶组件 */}
        <Hoc></Hoc>
      </div>
    )
  }
}

export default App;
