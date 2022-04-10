import Logo from "./Header/Logo";
import ResponsiveMenu from "./Header/ResponsiveMenu";
import ShapeTop from "./Header/ShapeTop";

function Header() {
    return(
        <div className="ft_navi_main_wrapper float_left">

        <div className="ft_logo_wrapper">
            <ShapeTop />
            
            <div className="resp_logo_wrapper d-block d-sm-block d-md-block d-lg-none d-xl-none">
                <Logo />
                <div className="resp_menu">

                    <div className="menu_toggle rotate" id="menu_toggle_icon">
                        <i className="fa fa-angle-down"></i>
                    </div>
                    <div id="menu_open" className="menu_dropdown">

                        <ResponsiveMenu />

                    </div>
                </div>
            </div>
        </div>
        <div className="ft_middle_wrapper d-none d-sm-none d-md-none d-lg-block d-xl-block">
            <a href="index.html">
                <img src="images/cricket/logo.png" alt="logo" />
            </a>
        </div>
        <div className="ft_right_wrapper">
            
        </div>
    </div>
    )
}

export default Header;