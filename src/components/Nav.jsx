import style from "./Nav.module.css";
import logo from "../assets/img/logo-white.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function Nav(){
    return (
        <div className={style.cont}>
            <img src={logo} alt="Logo" />
            <div>
                <a href="#"><p>About  <FontAwesomeIcon icon={faCaretDown} /></p></a>
                <a href="#"><p>Features</p></a>
                <a href="#"><p>Pages  <FontAwesomeIcon icon={faCaretDown} /></p></a>
                <a href="#"><p>Pricing</p></a>
                <a href="#"><p>FAQs</p></a>
                <a href="#"><p>Sign in</p></a>
                <a href="#" className={style.button}>Sign up</a>
            </div>
        </div>
    );
}