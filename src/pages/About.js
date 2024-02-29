import lofotoImg from '../images/lofot.jpg';
import reactLogo from '../images/react.png'
import './Home.css'
export default function About(){
    return(
        <div className='homeContainer'>
        <h1 className='title'>Om mig</h1>
        <h2 className='subtitle'>Jag är en glad pojke på 64 år</h2>
        <p className='content'>Detta är en enkel react sida med react router dom</p>
        <img src={lofotoImg} alt='Reactfoto' style={{width:'300px', height:'auto'}}/>
        <p className='content'>På detta vis kan vi bygga en fullständig webbsida</p>
    </div>
    );
}