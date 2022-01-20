import React, {Fragment} from "react";
import "./Input.css";
import { useState } from "react";
import ItemsList from "../Items List/ItemsList";

const Input=() =>{
    const [input, setInput]= useState(" ");
    const [mapitems, setMapItems]= useState([ ]);
    const [error, setError]= useState(false);

    const ValidSubmit=(event) =>{
        event.preventDefault();
        if(input.trim().length === 0){
            setError({
                message:"Enter an item"
            })
            return;
        }
            setMapItems((previtem)=>{
                return [...previtem, {
                 item:input,
                 id:Math.random().toString()
                }]
            })
        setInput(" ") 
    }
    const RemoveError=() =>{
        setError(" ")
    }

    const addItemHandler=(event) =>[
        setInput(event.target.value)
    ]

    const removeItemHandler=(event,id) =>{
        event.preventDefault();
        setMapItems(mapitems.filter(list=> list.id !==id))
    }

    return(
        <Fragment>
            <form onSubmit={ValidSubmit}>
                <h1 >Happy shopping</h1>
                 <label >Add your item</label>
                <input 
                onClick={RemoveError}
                value={input}
                onChange={addItemHandler}
                type="text"
                />
                {error && <p>{error.message}</p>}
                <button type="submit">Add</button>
                <ItemsList items={mapitems}
                RemoveItem={removeItemHandler}
                />
                </form>
        </Fragment>
    )
}

export default Input