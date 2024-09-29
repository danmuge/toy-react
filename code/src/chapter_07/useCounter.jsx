import React,{useState} from "react";

function useCounter(initialValue){
    const [count, setCount] = useState(initialValue);//초기 count를 파라미터로 받는다.

    const increaseCount = () => setCount((count) => count +1);//count state 증가
    const decreaseCount = () => setCount((count) => Math.max(count -1,0));//count state 감소

    return [count,increaseCount,decreaseCount];

}

export default useCounter;