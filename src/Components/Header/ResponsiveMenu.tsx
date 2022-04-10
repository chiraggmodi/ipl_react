import {  Link } from "react-router-dom";

import Menus from "../../Config/Menus";

function ResponsiveMenu(props: any) {
  const menuChildList = (menus: any) => {
    return menus.map((menu: any) => (
      <li key={menu.id}>
        <Link to={menu.url}>{menu.title}</Link>
      </li>
    ));
  };
  const menuHTML = () => {
    return Menus.map((menu: any) => {
      const menuClass = menu?.child ? "common_dropdown_wrapper float_left" : "";
      return (
        <li className={menuClass} key={menu.id}>
          <Link to={menu.url} title={menu.title}>
            {menu.title}
            {props?.main && menu?.child ? <i className="fa fa-angle-right"></i> : ""}
          </Link>
          {menu?.child ? <ul>{menuChildList(menu.child)}</ul> : ""}
        </li>
      );
    });
  };
  return <ul className="menu_wrapper menu_wrapper_2">{menuHTML()}</ul>;
}

export default ResponsiveMenu;
