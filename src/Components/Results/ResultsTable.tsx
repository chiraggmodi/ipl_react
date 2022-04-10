import moment from "moment";
import { Link } from "react-router-dom";
import { teamLogo } from "../../Config/TeamLogoMap";

const ResultsTable = (props: any) => {
  return (
    <tr>
      <td>{moment(props.date).format("DD-MM-Y")}</td>
      <td>
        <div className="tb-opponanet-contant">
          <div className="tb-team-1">
            <div className="team-logo">
              <img src={teamLogo[props?.team_1]} alt="img" />
            </div>
            <div className="text">
              <h6>
                <Link to={"/scoreboard/" + props.team_1_id}> {props.team_1}</Link>
              </h6>
            </div>
          </div>

          <div className="tb-opponanet">
            <h6>VS</h6>
          </div>

          <div className="tb-team-2">
            <div className="text txt22">
              <h6>
                <Link to={"/scoreboard/" + props.team_2_id} > {props.team_2}</Link>
              </h6>
            </div>
            <div className="team-logo lohoww">
              <img src={teamLogo[props?.team_2]} alt="img" />
            </div>
          </div>
        </div>
      </td>
      
      <td>{props.status}</td>
      <td>{props.venue}</td>
    </tr>
  );
};

export default ResultsTable;
