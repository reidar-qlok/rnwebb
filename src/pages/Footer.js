import './Footer.css'
import React from 'react'

export default function Footer(){
    return(
        <footer className='footer'>
        <p>© {new Date().getFullYear()} MrNielsen AB</p>
        </footer>
    );
}