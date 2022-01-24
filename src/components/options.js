import { render } from "@testing-library/react";
import React from "react";


class Options extends React.Component{
    constructor(props){
        super(props);
    }

render(){

return(
    <div className="op-container">
        <div className="op-select">
            <span>Status: </span>
            <select name="op-status" onChange={}>
                <option value="" selected></option>
                <option value="Alive" >Alive</option>
                <option value="Dead" >Dead</option>
                <option value="Unknown" >Unknown</option>
                
            </select>
        </div>
        <div className="op-select">
            <span>Species: </span>
            <select name="op-species">
                <option value="" selected></option>
                <option value="Human" >Human</option>
                <option value="Alien" >Alien</option>
                
            </select>
        </div>
    </div>
)
}
}


export default Options