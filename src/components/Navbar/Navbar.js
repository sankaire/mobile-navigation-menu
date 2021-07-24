import React, { Component } from 'react'
import './Navbar.css'
import { MenuItems } from './MenuItems'
import { Button } from '../Button'

export default class Navbar extends Component {
    state = { clicked:false }
    handleClick = () =>{
        this.setState({clicked : !this.state.clicked})
    }
    render() {
        return (
            <div>
                <nav className = "navbarItem">
                    <h1 className = "nav__logo">
                        Tepela.
                        <i className = "fa fa-user"></i>
                    </h1>
                    <div className = "menu__icon" onClick = { this.handleClick }>
                         <i className = { this.state.clicked ? "fa fa-times" : "fa fa-bars" }></i>
                    </div>
                    <ul className = { this.state.clicked ? "nav__menu active" : "nav__menu" }>
                        {MenuItems.map( (item, index) => {
                            return(
                                <li key = {index}>
                                    <a className = {item.cName} href = {item.URL}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <Button>Follow</Button>
                </nav>
            </div>
        )
    }
}

