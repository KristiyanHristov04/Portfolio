import * as React from 'react';
import './Header.css'

function activateMobileMenu() {
    const dropDownMenu = document.getElementById('dropdown-menu');
    const mobileMenu = document.getElementsByClassName('mobile-menu')[0];
    
    if (mobileMenu.style.display == 'none') {
        mobileMenu.style.display = 'block';
        dropDownMenu.classList.replace('fa-bars', 'fa-xmark');
    } else {
        mobileMenu.style.display = 'none';
        dropDownMenu.classList.replace('fa-xmark', 'fa-bars');
    }

}

export default function Header() {
    return (
        <>
            <div className='header'>
                <div className='navbar'>
                    <p><i className="fa-solid fa-code"></i> Kristiyan Hristov</p>
                    <div className='menu-container'>
                        <ul className='menu'>
                            <li><a>Home</a></li>
                            <li><a href='#projects'>Projects</a></li>
                            <li><a href='#contact-me'>Contact Me</a></li>
                        </ul>
                        <i className="fa-solid fa-bars" id='dropdown-menu' onClick={activateMobileMenu}></i>
                        <div className='mobile-menu'>
                            <a href='#'>Home</a>
                            <a href='#projects'>Projects</a>
                            <a href='#contact-me'>Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}