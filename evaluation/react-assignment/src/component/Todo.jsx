import React from "react";
import TodoList from "./TodoList";

const Todo = () => {
    let data = [
        {
            id:1,
            title:"Wake up",
            status:true
        },
        {
            id:2,
            title:"drink tea",
            status:false
        },
        {
            id:3,
            title:"eat maggi",
            status:true
        },
        {
            id:4,
            title:"sleep",
            status:false
        }
    ]
    return(
        <div>
            <h1 style={{"padding-top": "50px"}}>Todo List</h1>
            {data.map((item)=>(
                <TodoList {...item}/>
            ))}    
        </div>
    )
}
export default Todo;