import React, {Component} from 'react'
export class StateTest extends Component{
    state = {
        counter: 1
    }

    componentDidMount(){
        // 不要直接修改状态值
    //    this.state.counter += 1;

        //  2. 批量执行 (合并操作)
        this.setState({counter: this.state.counter+ 1});
        // this.setState({counter: this.state.counter+ 1});
        // this.setState({counter: this.state.counter+ 1});

        // 3.函数式

        // this.setState( prevState => {
        //     return {
        //         counter: prevState.counter + 1
        //     }
        // })
        
        this.setState( prevState => ({
                counter: prevState.counter + 1
        }))
        
        // this.setState( prevState => {
        //     return {
        //         counter: prevState.counter + 1
        //     }
        // })

        // this.setState( prevState => {
        //     return {
        //         counter: prevState.counter + 1
        //     }
        // })

    }

    componentWillUnmount(){
        
    }

    render(){
        return(
            <div>
                {this.state.counter}
            </div>
        )
    }
}