import React, { Component } from 'react'

function Kaikeba(props){
    return <div>{props.stage}-{props.name}</div>
}

const withKaikeba = Com => {
    // 获取name
    console.log()
    const name = '高阶组件'; //api获取
    return  props =>  <Com {...props} name={name} />;
}

const NewKaikeba = withKaikeba(Kaikeba)
export default class Hoc extends Component {
    render() {
        return (
            <div>
                {/* <Kaikeba state="React"></Kaikeba> */}
                <NewKaikeba state="React"></NewKaikeba>
            </div>
        )
    }
}
