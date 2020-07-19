import React, {Component} from 'react';

// 基于类的组件
export class Welcome1 extends Component{
    render(){
        return <div>Welcome1, {this.props.name}</div>
    }
}

// 函数类型的组件
export function Welcome2(props){
    return <div>Welcome2, {props.name}</div>
}
