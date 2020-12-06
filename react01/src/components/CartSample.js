import React, { Component } from 'react'

export default class CartSample extends Component {


    constructor(props){
        super(props);
        this.state = {
            goods: [
                {id: 1, text: 'web全栈架构师'},
                {id: 2, text: 'python全栈架构师'},
            ]
        }
    }
    render() {
        // const  title = this.props.title? <h1>this.props.title</h1> : null;
        return (
            <div>
                {/* 条件渲染 */}
                {this.props.title && <h1>{this.this.props.title}</h1>}

                {/* 列表渲染 */}
                <ul>
                    {this.state.goods.map(good => <li key={good.id}>{good.text}</li>)}
                </ul>
            </div>
        )
    }
}
