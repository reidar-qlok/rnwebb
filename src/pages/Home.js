import './Home.css'
import lofotoImg from '../images/lofot.jpg';
import reactLogo from '../images/react.png'
export default function Home(){
    return(
        <div className='homeContainer'>
            <h1 className='title'>Välkommen till min hemsida</h1>
            <h2 className='subtitle'>Lite formaterat text</h2>
            <p className='content'>Detta är en enkel react sida med react router dom</p>
            <img src={reactLogo} alt='Reactfoto' style={{width:'300px', height:'auto'}}/>
            <p className='content'>På detta vis kan vi bygga en fullständig webbsida</p>
        </div>
    );
}

