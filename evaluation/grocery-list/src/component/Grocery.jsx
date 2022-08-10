import React from "react";
import GroceryInput from "./GroceryInput";
import { v4 as uuidv4 } from 'uuid';
import GroceryList from "./GroceryList";

const Grocery = () => {
    const [data, setData] = React.useState([]);

    const handleAdd = (title) => {
        const GroceryItem = {
            title: title,
            status: false,
            id: uuidv4()
        }
        setData([...data, GroceryItem]);
    }

    console.log(data);
    const handleDelete = (id) => {
        const updatedData = data.filter((Grocery) => Grocery.id !== id);
        setData(updatedData);
    }

    return (
        <div>
            <h1>Grocery</h1>
            <GroceryInput handleAdd={handleAdd} />
            <GroceryList data={data} handleDelete={handleDelete} />
        </div>
    )
}
export default Grocery;