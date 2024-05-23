import React from 'react'
import style from './Navbar.module.css'
import Button from 'react-bootstrap/Button';

const Navbar = () => {
  return (
    <>
        <div className={style.NavbarContainer}>
            <div className={style.NavbarWrapper}>
                <img className={style.NavbarLogo} src="./public/logo.png" alt="logo" />
                <div className="NavbarButtons">
                  <button type="button" class="btn btn-link">Link</button>
                  <button type="button" class="btn btn-link">Link</button>
                  <button type="button" class="btn btn-link">Link</button>
                </div>
            </div>
        </div>
    </>
  )
}

Navbar.propTypes = {}

export default Navbar
