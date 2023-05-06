import home9 from '../../assets/images/home-9.png'
import home11 from '../../assets/images/home-11.png'
import home12 from '../../assets/images/home-12.png'
import home10 from '../../assets/images/home-10.png'
import './Page4.css'
export default function Page4(){
    return(
        <div className='features-benifit'>
            <h1>features & <br/>benefits</h1>
            <div className='features-benifit-container'>
                <FeaturesAndBenigfits image={home9} heading="plant base" subheading="Plant-protein yumminess, suitable for vegans (and everyone else)."/>
                <FeaturesAndBenigfits image={home11} heading="real ingredients" subheading="If we don’t know exactly what an ingredient is, we don’t include it."/>
                <FeaturesAndBenigfits image={home12} heading="unreal texture" subheading="t’s not meat. No really, it’s not!"/>
                <FeaturesAndBenigfits image={home10} heading="bland is banned" subheading="Foodies unite, because here flavour rules."/>
            </div>
        </div>
    )
}

function FeaturesAndBenigfits(props){
    return(
        <div className='features-benifit-content'>
            <img src={props.image}/>
            <div className='features-benifit-heading-subheading'>
                <h1>{props.heading}</h1>
                <p>{props.subheading}</p>
            </div>
        </div>
    )
}