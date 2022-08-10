import React from "react";

const GroceryInput = ({handleAdd}) => {
    const [title, setTitle] = React.useState("");
    // console.log(title);
    return(
        <div>
            <input placeholder="type something.                                                                                                                                                               .." type="text" value={title}
            onChange={(event)=>setTitle(event.target.value)}/>
            <button onClick={()=>handleAdd(title)}>Add</button>
        </div>
    )
}
export default GroceryInput;