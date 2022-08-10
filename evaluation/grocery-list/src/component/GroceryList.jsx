import React from "react";

const GroceryList = ({data, handleDelete}) => {
    // const handleDelete = (title) => {
    //     data.forEach((single)=>{
    //         if(single.title== title){
    //             console.log(title);
    //         }
    //     })
    // }
    // const handleDelete1 = (title) => {
    //     console.log(title);
    //     var th = data.filter((value)=>{
    //         return value!==title;
    //     })
    //     console.log(th);
    // }
    return(
        <div>
            {data.map((item) => (
                <div>
                    <h1>{item.title}</h1>
                    <button onClick={()=> {handleDelete(item.id)}}>Delete</button>
                </div> 
            ))}
        </div>
    )
}
export default GroceryList;