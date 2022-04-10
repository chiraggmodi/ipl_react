import { teamLogo } from "../../Config/TeamLogoMap";

const ScoreboardMain = ({teams, name, matchType, matchWinner, status, venue, score}: any) => {
    
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="ft_left_heading_wraper">
              <h1>Match result</h1>
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="upcoming_matches_wrapper float_left">
              <div className="row">
                <div className="col-md-3 col-sm-12 col-12">
                  <div className="match_list_wrapper as">
                    <div className="match_list_img">
                      <img src={teams ? teamLogo[teams[0]] : ""} className="img-responsive" alt="logo" />
                      <h4>{teams ? teams[0] : ""}</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-12">
                  <div className="latest_match_box float_left">
                    <p>{matchType}</p>
                    <h1>{name ? name : ""}</h1>
                    <h2>{venue}</h2>
                    <h3>{score ? `${score[0]?.r}/${score[0]?.w} (${score[0]?.o}) - ${score[1]?.r}/${score[1]?.w} (${score[1]?.o})` : ""}</h3>
                    <h4>{status}</h4>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12 col-12">
                  <div className="match_list_wrapper match_wraper_2">
                    <div className="match_list_img">
                      <img src={teams ? teamLogo[teams[1]] : ""} className="img-responsive" alt="logo" />
                      <h4>{teams ? teams[1] : ""}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreboardMain;
