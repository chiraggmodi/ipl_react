

function CarouselItem(props:any) {
  const activeClass = props.index === 0 ? "carousel-item active" : "carousel-item";
    return (
        <div className={activeClass} key={props.id}>
            <div className="carousel-captions caption-1">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="content lr_banner_content_inner_wrapper">
                      <div className="slider_ball_img">
                        <img src={props.image} alt="img" />
                      </div>
                      <div className="clear"></div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <div className="content lr_banner_content_inner_wrapper slider_cntent">
                      <h2 data-animation="animated fadeInUp">{props.title}</h2>
                      {props.viewMore ? 
                      <div className="hs_btn_wrapper slider_btn" data-animation="animated fadeInUp">
                        <ul>
                          <li>
                            <a href="#">view more</a>
                          </li>
                        </ul>
                      </div>
                     : null }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
}

export default CarouselItem;