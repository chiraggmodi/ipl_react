import ResponsiveMenu from "./Header/ResponsiveMenu";
import CarouselItem from "./HomeSliders/CarouselItem";
import Carousel from "../Config/Carousel";
import cricketBall from "./HomeSliders/ball.png"
import { Link } from "react-router-dom";

function HomeSlider() {
  return (
    <div className="slider-area">
      <div className="slider-area-overlay"></div>
      <div className="ft_shape_right">
        <img src="images/cricket/shape2.png" alt="shape" />
      </div>
      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
            {Carousel.map((item: any, index: number) => (<CarouselItem title={item.title} image={item.image} key={item.id} index={index} />))}
          <ol className="carousel-indicators">
          {Carousel.map((item: any, index: number) => ( <li data-target="#carousel-example-generic" data-slide-to={index} key={item.id} className={index === 0 ? "active" : ""}>
              <span className="number"></span>
            </li>))}
          </ol>
          <div className="carousel-nevigation">
            <Link className="prev" to="#carousel-example-generic" role="button" data-slide="prev">
              <i className="flaticon-left-arrow"></i>
            </Link>
            <Link className="next" to="#carousel-example-generic" role="button" data-slide="next">
              <i className="flaticon-right-arrow"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="ft_shape_right_2">
        <img src={cricketBall} alt="shape" />
      </div>
      <div className="text_effect">
        <h4>
          <span>C</span>
          <span>r</span>
          <span>i</span>
          <span>c</span>
          <span>k</span>
          <span>e</span>
          <span>t</span>
        </h4>
      </div>
      <div className="menu_main_wrapper d-none d-sm-none d-md-none d-lg-block d-xl-block">
        <ul className="menu_wrapper_2">
         <ResponsiveMenu main={true} />
        </ul>
      </div>
      <ul className="slider_social_icon">
        <li>
          <Link to="#">
            <i className="fa fa-facebook"></i>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fa fa-twitter"></i>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fa fa-youtube-play" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link to="#">
            <i className="fa fa-instagram" aria-hidden="true"></i>{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HomeSlider;
