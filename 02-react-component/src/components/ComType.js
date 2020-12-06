import React, { Component } from 'react'

export class Welcome1 extends Component {
    render() {
        return (
        <div>Welcome1, {this.props.name}</div>
        )
    }
}

export function Welcome2(props){
return <div>Welcome2, {props.name}</div>
}
