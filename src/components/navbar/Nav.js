import React from 'react'
import { NavLink } from 'react-router-dom'
import "./nav.css"

const nav = () => {
    return (
        <div className='container-fluid mx-0 d-flex justify-content-between py-3 bg-light shadow sticky-top'>
            <div>
                <NavLink to='/' className='nav-link links'>
                    <span className='highlight'>S</span>unny <span className='highlight'>P</span>ortfolio</NavLink>
            </div>
            <div className='d-flex'>
                <NavLink to='/about' className='nav-link mx-3 links'>About</NavLink>
                <NavLink to='/contact' className='nav-link mx-3 links'>Contact</NavLink>
            </div>

        </div>
    )
}

export default nav
