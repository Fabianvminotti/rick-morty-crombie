import React from "react";


class Options extends React.Component{
    constructor(props){
        super(props);
    }
    filterItems = ()=>{
    
        const{filterItems}=this.props
        var filterStatus = document.getElementById('op-status').value
        var filterSpecies = document.getElementById('op-species').value
        filterItems(filterStatus,filterSpecies)
    }

render(){

return(
    <div className="op-container">
        <div className="op-select">
            <span>Status: </span>
            {/* <select name="op-status" onChange={}>  */}
            <select name="op-status" id="op-status">

                <option value="" selected></option>
                <option value="Alive" >Alive</option>
                <option value="Dead" >Dead</option>
                <option value="Unknown" >Unknown</option>
                
            </select>
        </div>
        <div className="op-select">
            <span>Species: </span>
            <select name="op-species" id="op-species">
                <option value="" selected></option>
                <option value="Human" >Human</option>
                <option value="Alien" >Alien</option>
                
            </select>
        </div>
        <button onClick={this.filterItems}>Filter</button>
    </div>
)
}
}


export default Options