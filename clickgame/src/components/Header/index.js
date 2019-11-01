import React from "react"
import "./style.css"

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Navbar</span>
            </nav>
        )
    }
}