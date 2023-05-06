import home5 from '../../assets/images/home-5.svg'
import './Page3.css'
export  default function Page3(){
    return(
        <section className='page3-container'>
            <img src={home5} alt="women hugging" />
            <div className='page-3-heading-subheading'>
                <h1>Inspiring good through tasty goodness</h1>
                <p>We’re here to inspire discovery and tempt everyone to eat more plants. Because we care about the future – yours, ours and the planet’s.</p>
            </div>
        </section>
    )
}