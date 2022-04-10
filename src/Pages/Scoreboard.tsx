import { Outlet } from "react-router-dom";
import InnerHeader from "../Layouts/InnerHeader";
import "./inner_style.css";

const ScoreboardPage = () => {
  return (
    <>
      <InnerHeader />
      <div className="iner_about_wrapper float_left">
        <Outlet />
      </div>
    </>
  );
};

export default ScoreboardPage;
