### React

1. 起步
   npm i -g create-react-app
   create-react-app react01
   两步合并一步
   npx create-react-app react-test

yarn start
npm i redux --save
npm i antd --save

2. 组件
   函数
   类

   16.2 hooks 函数式

state 和 setState

`
componentDidMount(){
// 不要直接修改状态值
// this.state.counter += 1;

        //  2. 批量执行 (合并操作)
        this.setState({counter: this.state.counter+ 1});
        this.setState({counter: this.state.counter+ 1});
        this.setState({counter: this.state.counter+ 1});
    }

`

3. 组件传参

### 核心

1. React 和 ReactDom
   React 逻辑控制，React.createElement()
   ReactDom

2. JSX
   表达式：{expr}
   属性: <div id={expr}></div>
   jsx 也是表达式: <p>{jsx}</p>

3. 组件 (UI = F(state))
   函数式：
   function Comp(props){
       return (...)
   }

   类
   class Comp extends React.Component{
       render(){
           return (...)
       }
   }

4. 属性
    <Comp name="" style={{...}} /> 
    <img src={} />>

5. 状态
    class Comp{
        state = {name: 11}

        componentDidMount(){
            //批量合并
            this.setState({name: 22})
            this.setState( (state)=> ({prop: val}))

        }
    }

6. 条件和循环
{this.state.isLogin? <p>{userInfo.name}</p>: '登录'}
{this.state.message&&<p>{this.state.message}</p>}
{this.state.list.map(u => <li>{u.name}</li>)}

7. 事件
    `
    // 注意this指向
    1. 定义函数用箭头函数
        onChange = () => {}
        <input onChange={this.onChange}/>
    2. constrocter bind
    3. onChange中直接使用箭头函数
        <input onChange={()=>this.onChange()}/>

8. 通信
    <Com title ={} onSubmit = {this.onSubmit}>
        
    `
9. PureComponent  / memo



### 配置按需加载

    react-app-rewired 
    https://www.jianshu.com/p/885f4edfb4a7


    安装react-app-rewired取代react-scripts，可以扩展webpack配置，类似vue.config.js
    npm install react-app-rewired@2.0.2-next.0  babel-plugin-import --save
