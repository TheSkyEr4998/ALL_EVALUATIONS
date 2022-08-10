import React from "react";

const Counter = () => {

    const [count, setCount] = React.useState(1);

    function changeCount(val){
        setCount(val);
    }
    return(
        <div>
            <h1>Counter App</h1>
            {/* <h1> Counter: {count}</h1> */}

            {count%2===1 ? (<h1 style={{color: "red"}}>Counter: {count}</h1>) : (<h1 style={{color: "green"}}>Counter: {count}</h1>)}
            <button onClick={()=>changeCount(count+1)}>Add</button>
            <button onClick={()=>changeCount(count-1)}>Subtract</button>
            <button onClick={()=>changeCount(count*2)}>Double</button>
        </div>
    )
}
export default Counter;