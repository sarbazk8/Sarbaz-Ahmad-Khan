import React from 'react'
import f from '../image/facebook.png'
import t from '../image/twitter.png'
import i from '../image/instagram.png'
import n from '../image/next.png'

function Header(){
    return(
        <div className='navbar'>
            <h1 className='title'>ToolM5</h1>
            <h2>About us</h2>
            <h2>Services</h2>
            <h2>Contacts</h2>
            <img src={f} alt='facebook.png' className='header_icon'/>
            <img src={t} alt='twitter.png' className='header_icon'/>
            <img src={i} alt='instagram.png' className='header_icon'/>
            <button className='header_btn'>Get Started <img src={n} alt='next.png' className='btn_icon'/></button>
        </div>
    )
}
export default Header