import React from "react";
import "./itemList.css";

const ItemsList= props =>{
    return(
        <div className="items_list">
        <ul>
            {props.items.map((list)=>(
            <li className="list" key={list.id}>
                {list.item}
                <i onClick={(event) => props.RemoveItem(event, list.id)} className="fas delete fa-trash"></i>
            </li>
            ))}
        </ul>
        </div>
    )
}

export default ItemsList;