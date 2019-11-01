import React from "react";
import "./style.css"

export default class BigMeme extends React.Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 style={{textAlign: "center"}} className="display-4">{this.props.message}</h1>
                </div>
            </div>
        )
    }
}