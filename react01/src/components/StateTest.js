import React, { Component } from 'react'

export default class StateTest extends Component {
    state = {
        counter: 1
    }
    componentDidMount(){
        //1. 不要直接修改状态值
        // this.state.counter += 1; 

        //2. 批量执行
        // this.setState(obj)
        // this.setState(fn)
        this.setState({counter: this.state.counter+1})

        // 依赖之前的值
        this.setState(prevState => ({
            counter: prevState.counter + 1
            
        }))
    }
    render() {
        return (
            <div>
                {this.state.counter}
            </div>
        )
    }
}

