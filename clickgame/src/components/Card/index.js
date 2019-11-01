import React from "react";
import "./style.css"




export default class Card extends React.Component {
    render() {
        return (
                <div onClick={() => this.props.cb(this.props.id)} className="card" style={{ width: 150 + "px", margin: "0 auto", display: "inline-block" }}>
                    <img style={{ width: 150 + "px", height: 150 + "px"}} className="card-img-top" src={this.props.img} alt="meme" />
                </div>
        )
    }
}