import React,{useState,useEffect} from "react";
import useCounter from "./useCounter";

const Max_CAPACITY = 10;//최대 카운트 개수

function Accommodate(props){
    const [isFull,setIsFull] = useState(false);
    const [count,increaseCount,decreaseCount] = useCounter(0);

    useEffect(()=>{//의존성 배열 X (마운트된 직후 호출,업데이트 될때 마다 호출)
        console.log("=================");
        console.log("useEffect() is called");
        console.log(`isFull: ${isFull}`)
    });

    useEffect(() => {//의존성 배열 O (마운트된 직후 호출,의존성 배열이 바뀔때 마다 호출)
        setIsFull(count >= Max_CAPACITY);//10보다 크면 setIsFull에 저장
        console.log(`Current count value: ${count}`);
    },[count]);

    return(
        <div style={{padding: 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{color : "red"}}>정원이 가득찼습니다.</p>}
        </div>

    );
}

export default Accommodate;