import burger from '../../assets/images/CuriousBurger1_Edit-e1668701643143-1024x815.png'
import sp1 from '../../assets/images/1.jpg'
import sp2 from '../../assets/images/2.png'
import sp3 from '../../assets/images/3.png'
import sp4 from '../../assets/images/4.png'
import sp5 from '../../assets/images/5.png'
import sp6 from '../../assets/images/6.png'
import sp7 from '../../assets/images/7.png'
import sp8 from '../../assets/images/8.png'
import sp9 from '../../assets/images/9.png'
import sp10 from '../../assets/images/10.png'
import sp11 from '../../assets/images/11.png'
import sp12 from '../../assets/images/12.png'
import sp13 from '../../assets/images/13.png'
import sp14 from '../../assets/images/14.png'
import sp15 from '../../assets/images/15.png'
import sp16 from '../../assets/images/16.png'
import sp17 from '../../assets/images/17.png'
import sp18 from '../../assets/images/18.png'
import sp19 from '../../assets/images/19.png'
import sp20 from '../../assets/images/20.png'
import sp21 from '../../assets/images/21.png'
import sp22 from '../../assets/images/22.png'
import sp23 from '../../assets/images/23.png'
import sp24 from '../../assets/images/24.png'

import './Page1.css'
export default function Page1(){
    return(
        <section  className='page1-container'>
            <div className='heading-burger-container'>
                <div className='heading-page1'>
                    meat<span>-</span>free
                </div>
                <div className='burger'>
                    <img src={burger} alt="burger" />
                </div>
                <div className='heading-page1'>
                    your mind
                </div>
            </div>
            <div className='sponsor-scrolling'>
                <Sponsor/>
            </div>
        </section>
    )
}

function Sponsor(){
    return(
        <>
            <div className='sponsors-name'>
                <div className='company-name'><img src={sp1}/></div>
                <div className='company-name'><img src={sp2}/></div>
                <div className='company-name'><img src={sp3}/></div>
                <div className='company-name'><img src={sp4}/></div>
                <div className='company-name'><img src={sp5}/></div>
                <div className='company-name'><img src={sp6}/></div>
                <div className='company-name'><img src={sp7}/></div>
                <div className='company-name'><img src={sp8}/></div>
                <div className='company-name'><img src={sp9}/></div>
                <div className='company-name'><img src={sp10}/></div>
                <div className='company-name'><img src={sp11}/></div>
                <div className='company-name'><img src={sp12}/></div>
                <div className='company-name'><img src={sp13}/></div>
                <div className='company-name'><img src={sp14}/></div>
                <div className='company-name'><img src={sp15}/></div>
                <div className='company-name'><img src={sp16}/></div>
                <div className='company-name'><img src={sp17}/></div>
                <div className='company-name'><img src={sp18}/></div>
                <div className='company-name'><img src={sp19}/></div>
                <div className='company-name'><img src={sp20}/></div>
                <div className='company-name'><img src={sp21}/></div>
                <div className='company-name'><img src={sp22}/></div>
                <div className='company-name'><img src={sp23}/></div>
                <div className='company-name'><img src={sp24}/></div>
            </div>
            <div className='sponsors-name'>
                <div className='company-name'><img src={sp1}/></div>
                <div className='company-name'><img src={sp2}/></div>
                <div className='company-name'><img src={sp3}/></div>
                <div className='company-name'><img src={sp4}/></div>
                <div className='company-name'><img src={sp5}/></div>
                <div className='company-name'><img src={sp6}/></div>
                <div className='company-name'><img src={sp7}/></div>
                <div className='company-name'><img src={sp8}/></div>
                <div className='company-name'><img src={sp9}/></div>
                <div className='company-name'><img src={sp10}/></div>
                <div className='company-name'><img src={sp11}/></div>
                <div className='company-name'><img src={sp12}/></div>
                <div className='company-name'><img src={sp13}/></div>
                <div className='company-name'><img src={sp14}/></div>
                <div className='company-name'><img src={sp15}/></div>
                <div className='company-name'><img src={sp16}/></div>
                <div className='company-name'><img src={sp17}/></div>
                <div className='company-name'><img src={sp18}/></div>
                <div className='company-name'><img src={sp19}/></div>
                <div className='company-name'><img src={sp20}/></div>
                <div className='company-name'><img src={sp21}/></div>
                <div className='company-name'><img src={sp22}/></div>
                <div className='company-name'><img src={sp23}/></div>
                <div className='company-name'><img src={sp24}/></div>
            </div>
        </>
    )
}