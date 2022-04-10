import logo from "./logo3.png";
import logoDark from "./logo.png";
function Logo({dark}: any) {
    return(
        <a href="#">
            <img src={dark ? logoDark : logo} alt="logo" />
        </a>
    )
}

export default Logo;