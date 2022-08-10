import React from "react";

const TodoList = (props) => {
    const {title, status} = props;
    return(
        <div>
            {/* <h1>{title}</h1> */}
            {status===true ? (<h2 style={{color: "green"}}>{title}</h2>):(<h2 style={{color: "red"}}>{title}</h2>)}
        </div>
    )
}
export default TodoList;