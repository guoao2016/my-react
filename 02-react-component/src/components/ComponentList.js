import React, { Component } from 'react'

export default class ComponentList extends Component {
    constructor(props){
        super(props);
        this.state = {
            components: []
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                components: [
                    {body: "react is very good", author: "facebook"},
                    {body: "vue is very good", author: "Evan You"}
                ]
            })
        }, 1000);
    }

    render() {
        return (
            <div>
                {
                    this.state.components.map( (c, i) => (
                        <Comment key={i} {...c}/>
                    ))
                }
            </div>
        )
    }
}

// 展示组件  - 限制无效更新
// class Comment extends React.PureComponent{
//     // shouldComponentUpdate(nextProps){
//     //     if(nextProps.data.body == this.props.data.body && 
//     //         nextProps.data.author == this.props.data.author){
//     //         return false;
//     //     }
//     //     return true;
//     // }

//     render(){
//         console.log("render component")
//         return (
//             <div>
//                 <p>{this.props.body}</p>
//                 <p>---{this.props.author}</p>
//             </div>
//         )
//     } 
// }

// 展示组件
// memo高阶组件
const Comment = React.memo(function(props){
    console.log("render Component")
    return (
        <div>
            <p>{props.body}</p>
            <p>--- {props.author}</p>
        </div>
    )
});


// function Comment({data}){
//     console.log(data)
//     return (
//         <div>
//             <p>{data.body}</p>
//             <p>---{data.author}</p>
//         </div>
//     )
// }
