import chef from '../../assets/images/home-3.svg'
import './Page2.css'
export default function Page2(){
    return(
        <section className='page2-container'>
            <div>
                <h1>curious... by name, by nature</h1>
                <p>It’s what inspires us to whip up, throw together, tear, shake, and break the rules – on a mission to redefine food for a new generation.</p>
            </div>
            <img src={chef} alt="chef" />
        </section>
    )
}