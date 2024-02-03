import './navbar.scss';
import {motion} from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'



const Navbar = () => {
    return(
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>

            <div className="wrapper">
                <motion.span initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale:1}}
                transition={{duration:1}}>
                    Suyan Shrestha</motion.span>
            
                <div className="social">
                    {/* <a href="https://www.facebook.com/suyanshrestha.9696" target='_blank'><img src="/facebook.png" alt="" /></a> */}
                    <a href="https://www.facebook.com/suyanshrestha.9696" target='_blank'><FontAwesomeIcon icon={faFacebook}/></a>
                    {/* <a href="#"><img src="/instagram.png" alt="" /></a>
                    <a href="#"><img src="/linkedin.png" alt="" /></a> */}
                    <a href="https://www.instagram.com/suyanshrestha___/" target='_blank'><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="https://www.linkedin.com/in/suyanshrestha/" target='_blank'><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a href="https://github.com/SuyanShrestha" target='_blank'><FontAwesomeIcon icon={faGithub}/></a>


                </div>
            </div>
        </div>
    );
}

export default Navbar