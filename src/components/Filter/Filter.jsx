import React from "react";

export const Filter = ({data, changeFilter})=>{
    return (
        <label>Find contacts by name
        <input type="text" value={data} onChange={changeFilter} />
    </label>
    )
    
}