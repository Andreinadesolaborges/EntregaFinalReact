import hero from '../../img/hero.png';
import heroDark from '../../img/hero-dark.png';
import { useDarkModeContext } from '../../context/DarkModeContext';
const Hero = () => {
    const {darkMode} = useDarkModeContext();
    return (    
        <>
            <div className="col-12 order-1 col-md-5 order-md-1 align-self-center">
                <img className={`align-self-center d-inline-block align-text-center img-responsive w-100 extra-margin-hero ${darkMode ? 'd-none' : 'd-block'}`} src={hero} alt={"hero"} />
                <img className={`align-self-center d-inline-block align-text-center img-responsive w-100 extra-margin-hero  ${darkMode ? 'd-block' : 'd-none'}`} src={heroDark} alt={"hero"} />
            </div>

        </>
    );
}

export default Hero;
