import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(props){
        super(props)
        console.log("1.组件构造函数执行");
    }

    componentWillMount(){
        console.log("2.组件将要挂载")

    }

    componentDidMount(){
        console.log("3.组件已挂载")
    }

    componentWillReceiveProps(){
        console.log("4.将要接收属性传递")
    }

    shouldComponentUpdate(){
        console.log("5.组件是否需要更新？")
        return true; //后面才会继续执行
    }

    componentWillUpdate(){
        console.log("6.组件将要更新")
    }

    componentDidUpdate(){
        console.log("7.组件已经更新")
    }

    componentWillUnmount(){
        // 组件将要卸载，可做清理工作
        console.log("8.组件将要卸载")
    }

    render() {
        console.log("组件渲染");
        return (
            <div>
                生命周期探究
                <span>{this.props.name}</span>
            </div>
        )
    }
}
