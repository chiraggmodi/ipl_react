import {  Link } from "react-router-dom";
import Logo from "../Components/Header/Logo";

import Menus from "../Config/Menus";

const HeaderSideBar = () => {
    const menuChildList = (menus: any) => {
        return menus.map((menu: any) => (
          <li key={menu.id}>
            <Link to={menu.url}>{menu.title}</Link>
          </li>
        ));
      };
    const menuHTML = () => {
        return Menus.map((menu: any) => {
          const menuClass = menu?.child ? "has-sub" : "";
          return (
            <li className={menuClass} key={menu.id}>
              <Link to={menu.url} title={menu.title}>
                {menu.title}
              </Link>
              {menu?.child ? <ul>{menuChildList(menu.child)}</ul> : ""}
            </li>
          );
        });
      };
  return (
    <>
      <div id="sidebar" className="bounce-to-right" style={{left: '-500px'}}>
        <div id="toggle_close">&times;</div>
        <div id="cssmenu">
          <Logo dark={true} />
          <ul className="sidebb">
            {menuHTML()}
            
          </ul>
        </div>
        <div className="btm_foter_box sidebar_btm_txt">
          
          <p>
            <i className="fa fa-copyright"></i> 2022 Chirag Modi. design by <a href="https://www.chiragmodi.com"> Chirag Modi .</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default HeaderSideBar;
