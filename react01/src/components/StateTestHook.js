// hook

import React, {useState} from 'react'
export function StateTestHook(){
//   在函数组件中state可以是一个原始类型
// 使用一个状态，该状态的默认值是0， 调用useState后返回一个数组
// 数组的第一项是默认值，数组的第二项是一个函数用来改变这个state

const [counter, setCounter] = useState(0);
return (
    <div className="test-hook">
        <button onClick={() => {setCounter(counter -1 )}}> - </button>
        <span>{counter}</span>
        <button onClick={() => {setCounter(counter +1 )}}> + </button>
    </div>
)
      
      
}