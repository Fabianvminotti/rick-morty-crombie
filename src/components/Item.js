import React from "react";


class Item extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="item-container">
                <img/>
                <h3 className="item-name">{this.props.name}</h3>
                <span className="item-desc">Status:{this.props.status}</span>
                <span className="item-desc">Species: {this.props.species}</span>
                <span className="item-desc">Origin: {this.props.origin} </span>
            </div>
        )
    }

}


export default Item