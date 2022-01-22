import React from "react";


class Item extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="item-container">
                <img className="item-img" src={this.props.image}/>
                <h3 className="item-name">{this.props.name}</h3>
                <span className="item-desc">Status:{this.props.status}</span>
                <span className="item-desc">Species: {this.props.species}</span>
            </div>
        )
    }

}


export default Item