import React, { Component } from 'react'

export default class CartSample extends Component {
    state = {}
    // 状态的初始化一般放在构造器中
    constructor(props){
        super(props);

        this.state = {
            goods: [
                {id:1, text: 'web',  price: 10000},
                {id:2, text: 'python', price: 12000}
            ],
            text: '',
            cart: []
        }

        // 绑定this
        this.addGood1 = this.addGood.bind(this);
    }

    // 回调函数
    textChange = (e)=> {
        this.setState({text: e.target.value})
    }

    // addGood1(){
    //     this.setState( prevState => {
    //         return{
    //             goods: [
    //                 ...prevState.goods,
    //                 {
    //                     id: prevState.goods.length+1, 
    //                     text: prevState.text
    //                 }
    //             ]
    //         }
    //     })
    // }

    addGood = ()=> {
        this.setState( prevState => {
            return{
                goods: [
                    ...prevState.goods,
                    {
                        id: prevState.goods.length+1, 
                        text: prevState.text,
                        price: prevState.price
                    }
                ]
            }
        })
    }

    // 加购物车
    addToCart= (good)=> {
        // 创建新购物车
        console.log(good)
        const newCart = [...this.state.cart];
        console.log()
        const idx = newCart.findIndex( c=> c.id === good.id);
        const item = newCart[idx];
        if(item){
            newCart.splice(idx, 1, {...item, count: item.count+ 1})
        }else{
            newCart.push({...good, count: 1})
        }
        // 更新
        this.setState({cart: newCart})
    }

    // 处理数量更新

    miuns = good => {
        const newCart = [...this.state.cart];
        const idx = newCart.findIndex( c=> c.id === good.id);
        const item = newCart[idx];
        if(item.count>1){
            newCart.splice(idx, 1, {...item, count: item.count-1})
        }else{
            // if(confirm(`确定将${item.name}删除购物车`)){
            //     newCart.splice(idx, 1);
            // }
        }
        this.setState({cart: newCart})
    }

    add = good => {
        const newCart = [...this.state.cart];
        const idx = newCart.findIndex( c=> c.id === good.id);
        const item = newCart[idx];
        newCart.splice(idx, 1, {...item, count: item.count+ 1})
        this.setState({cart: newCart})
    }

    render() {
        return (
            <div>
                {/* 条件渲染 */}
                {this.props.title && <h2>{this.props.title}</h2>}

                {/* 列表渲染 */}
                <div>
                    <input 
                        type="text" 
                        value={this.state.text} 
                        onChange={this.textChange}
                    />
                    <button onClick={this.addGood}>添加商品</button>
                </div>
                <ul>
                    {this.state.goods.map(good => (
                        <li key={good.id}>
                            {good.id +' ' + good.text}
                            <button onClick={()=> this.addToCart(good)}>加购</button>
                        </li>)
                    )}
                </ul>

                {/* 购物车  Cart只负责数据展示*/}
                <Cart data={this.state.cart} miuns={this.miuns} add={this.add}></Cart>
            </div>
        )
    }
}

function Cart({data, miuns, add}){
    return(
        <table>
            <thead>
                <tr>
                    <th>商品</th>
                    <th>数量</th>
                    <th>价格</th>
                </tr>
            </thead>
            <tbody>
                {data.map(d => (
                    <tr key={d.id}>
                        <td>{d.text}</td>
                        <td>
                            {/* 状态提示，父级处理 */}
                            <button onClick={() => miuns(d)}>-</button>
                            {d.count}
                            <button onClick={() => add(d)}>+</button>
                        </td>
                        <td>{d.price*d.count}</td>
                    </tr>
                ))}
             
            </tbody>
        </table>
    )
}
