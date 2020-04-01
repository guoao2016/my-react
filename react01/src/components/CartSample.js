import React, {component, Component} from 'react';
export class CartSample extends Component{
// 状态初始化一般放在构造器中
    constructor(props){
        super(props)
        this.state = {
            goods: [
                {id: 1, text: 'web全栈架构中'},
                {id: 2, text: 'python全栈架构中'},
            ]
        }
    }

    render(){
        // const title = this.props.title ? <h1>this.props.title</h1> : null;
        return(
            <div>
                {/* 条件渲染 */}
                {this.props.title && <h1>this.props.title</h1>}

                {/* 列表渲染*/}
                <ul>
                    {this.state.goods.map( good => <li key={good.id}>{good.text}</li>)}
                </ul>
            </div>
        )
    }
}