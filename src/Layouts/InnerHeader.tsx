import Logo from "../Components/Header/Logo";
import ResponsiveMenu from "../Components/Header/ResponsiveMenu";
import ShapeTop from "../Components/Header/ShapeTop";
import HeaderSideBar from "./HeaderSideBar";

function InnerHeader() {
  return (
    <>
    <HeaderSideBar />
    <div className="ft_navi_main_wrapper float_left">

<div className="ft_menu_wrapper">

    
    <div className="rp_mobail_menu_main_wrapper">
        <div className="row">
            <div className=" col-sm-12 col-12">
                <div id="toggle">
                    <i className="fa fa-bars"></i><span>menu</span>
                </div>
            </div>
        </div>

    </div>
</div>

<div className="ft_logo_wrapper">
    <Logo dark={true} />
</div>
<div className="ft_right_wrapper">
    
</div>
</div>
    </>
  );
}

export default InnerHeader;
