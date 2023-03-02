import Hero from "../Hero/Hero";
import ArrowIcon from '../../img/arrow-down.svg';
import ArrowIconDark from '../../img/arrow-down-dark.svg';
import { useDarkModeContext } from '../../context/DarkModeContext';
const Herocontainer = ({ mainHeader, subtitle }) => {
    const {darkMode} = useDarkModeContext();
    return (
        <>
            <div className="container-fluid p-3">
                <div className="row align-items-center fullscreen-height">
                    <Hero/>
                    <div className="col-12 order-3 col-md-2 order-md-2 text-center align-self-end py-3">
                        <a href="#productos">
                            <button className={`btn  ${darkMode ? 'btn-secondary': 'btn-primary '} rounded-circle pad-btn zoomIn my-3 extra-margin-hero`}>
                                <img src={ArrowIcon} alt={"ArrowIcon"} style={{ height: 16 }} className ={`${darkMode ? 'd-none' : 'd-block'}`} />
                                <img src={ArrowIconDark} alt={"ArrowIcon"} style={{ height: 16 }} className ={`${darkMode ? 'd-block' : 'd-none'}`} />
                            </button>
                        </a>
                    </div>
                    <div className="col-12 order-2 col-md-4 order-md-3 text-center align-self-center">
                        <h1 className={`${darkMode ? 'text-light hoverLineDark' : 'text-dark hoverLine'} `}>{mainHeader}</h1>
                        <h6 className={`${darkMode ? 'text-light' : 'text-dark'} extra-margin-hero`}>{subtitle}</h6>
                    </div>
                </div>
                
                   
               
            </div>

        </>
    );
}

export default Herocontainer;
