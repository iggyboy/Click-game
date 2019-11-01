import React from "react"
import "./style.css"

export default class Header extends React.Component {
    render() {
        return (
            <nav style={{
                display: "flex",
                justifyContent: "space-around"
            }} className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Rune-Clicker</span>
                <span><b>Score: {this.props.score}</b></span>
            </nav>
        )
    }
}