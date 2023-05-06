import './Navbar.css'
import insta from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import linkedin from '../../assets/images/linkedin.svg'
import hamburger from '../../assets/images/menu_FILL0_wght400_GRAD0_opsz48.svg'
import closing from '../../assets/images/8665957_square_minus_icon.png'
import { useState } from 'react'

export default function Navbar(){
    const[toggle, setToggle] = useState(false);
    return(
        <div className='navbar'>
            <nav className='navlinks-container'>
                <ul className='links'>
                    <li className='about'><a href="#">about</a></li>
                    <li className='products'><a href="#">products</a></li>
                    <li>
                        <div className='logo'>
                            <div>eat<br/>curious</div>
                        </div>
                    </li>
                    <li className='recipes'><a href="#">recipes</a></li>
                    <li className='contactus'>
                        <div className='content'>
                            <a href="#">contact us</a>
                            <a href="#">contact us</a>
                            <a href="#">contact us</a>
                        </div>
                    </li>
                </ul>
                <div className='hamburgerMenu'>
                    <OpenHamburger onClick={()=>{setToggle(true)}}/>
                </div>
                {toggle && (
                    <div className='hamburger-container overlay'>
                        <div className='hamburgerClose'>
                            <Closehamburger onClick={()=>{setToggle(false)}}/>
                        </div>
                        <ul className='hamburger-links'>
                            <li><a href="#">products</a></li>
                            <li><a href="#">contact</a></li>
                        </ul>
                        <div className='socialmedia'>
                            <div><a href="#"><img src={insta}/></a></div>
                            <div><a href="#"><img src={facebook}/></a></div>
                            <div><a href="#"><img src={linkedin}/></a></div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}

function OpenHamburger(props){
    return(
        <span className="hamburger" onClick={()=>{props.onClick()}}><img src={hamburger} alt="hamburger menu"/></span>
    )
}

function Closehamburger(props){
    return(
        <span className='hamburger-closing' onClick={()=>{props.onClick()}}>
            <img src={closing}/>
      </span>
    )
}