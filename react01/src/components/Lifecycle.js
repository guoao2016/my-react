import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(props){
        super(props);
        console.log("1. 组件构造函数执行");
    }

    // componentWillUnmount(){
    //     console.log("2. 组件将要挂载");
    // }
    componentDidMount(){
        console.log("3. 组件已挂载");
    }
    // componentWillReceiveProps(){
    //     console.log("4. 将要接收属性传递");
    // }

    shouldComponentUpdate(){
        console.log("5. 组件是否需要更新");
        return true;
    }
    // componentWillUpdate(){
    //     console.log("6. 组件将要更新组件渲染");
    // }

    componentDidUpdate(){
        console.log("7. 组件已更新");
    }

    
    componentDidCatch(error, info){
        // 错误处理
        console.log(error, info)
    }

    render() {
        return (
            <div>
                组件生命周期
            </div>
        )
    }
}
