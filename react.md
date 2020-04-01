### React

1. 起步
npm i -g create-react-app
create-react-app react01

yarn start 


2. 组件
函数
类


16.2 hooks   函数式

state和setState

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





1. 核心