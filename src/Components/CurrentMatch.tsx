import axios from "../Config/Api";
import { useEffect, useState } from "react";
import { IPLAPIID } from "../Config/env";
import moment from "moment";
import CountDown from "./CountDownTimer/CountDown";
import { Link } from "react-router-dom";
import { teamLogo } from "../Config/TeamLogoMap";

function CurrentMatch() {
  const [ipl_series_info, setipl_series_info] = useState(() => {
    // getting stored value
    const saved: any = localStorage.getItem("ipl_series_info");
    const initialValue: any = JSON.parse(saved);
    return initialValue || "";
  });
  const [upcomingIPL, setUpcomingIPL] = useState<any>([]);

  useEffect(() => {
    axios
      .get(`/series_info/?id=${IPLAPIID}`)
      .then((response: any) => {
        const dataToStore = JSON.stringify(response);
        setipl_series_info(dataToStore);
        localStorage.setItem("ipl_series_info", dataToStore);

        const featureMatches: any = response?.data?.data.matchList.filter((match: any) => {
          const now = moment().format("Y-MM-DD");
          const matchDate = moment(match.dateTimeGMT).format("Y-MM-DD");
          if (moment(matchDate).isSame(now)) {
            return match;
          }
          return false;
        });
        if (featureMatches) {
          const currentMatch = featureMatches.filter((match: any) => {
            const now = moment().format("Y-MM-DD HH:mm:ss");
            const matchDate = moment(match.dateTimeGMT).format("Y-MM-DD HH:mm:ss");
            if (moment(matchDate).isSameOrAfter(now)) {
              return match;
            } else {
              if (moment(matchDate).isSameOrBefore(now)) {
                return match;
              }
            }
            return false;
          });
          
          setUpcomingIPL(currentMatch);
        }
      })
      .catch((error: any) => {
        console.log("error  ---", error);
      });
  }, [ipl_series_info]);


  return (
    <div className="ticket_slider float_left">
      <div className="container">
        <div className="next_match_wrapper float_left">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="upcoming_matches_wrapper float_left">
                <div className="row">
                  <div className="col-md-5 col-sm-5 col-4">
                    <div className="match_list_wrapper as">
                      <div className="match_list_img">
                        <img src={teamLogo[upcomingIPL[0]?.teams[0]]} className="img-responsive" alt="logo" />
                        <h4>{upcomingIPL[0]?.teams[0]}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-2 col-4">
                    <div className="new">
                      <Link to="#">
                        <span>VS</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-5 col-4">
                    <div className="match_list_wrapper match_wraper_2">
                      <div className="match_list_img">
                        <img src={teamLogo[upcomingIPL[0]?.teams[1]]} className="img-responsive" alt="logo" />
                        <h4>{upcomingIPL[0]?.teams[1]}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {upcomingIPL[0]?.status === "Match not started" ? (
                <CountDown date={moment(upcomingIPL[0]?.dateTimeGMT).format("MMM DD Y HH:mm:ss zzZ")} />
              ) : (
                <div className="home_btn_wrapper next_match_btn">
                  <ul>
                    <li>
                      <Link to={"scoreboard/" + upcomingIPL[0]?.id}> Match Started </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentMatch;
