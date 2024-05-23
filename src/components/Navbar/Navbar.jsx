import React from 'react'
import style from './Navbar.module.css'

const Navbar = (props) => {
  return (
    <>
        <div className={style.NavbarContainer}>
            <div className={style.NavbarWrapper}>
                <img src="./public/logo.png" alt="logo" />
            </div>
        </div>
    </>
  )
}

Navbar.propTypes = {}

export default Navbar
