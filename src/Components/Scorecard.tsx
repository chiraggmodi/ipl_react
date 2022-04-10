import ScoreboardMain from "./Scorecard/ScoreboardMain";
import ScorecardList from "./Scorecard/ScorecardList";

const Scorecard = (props: any) => {
  console.log(props);

  return (
    <>
      <ScoreboardMain
        teams={props?.scoredata?.teams}
        name={props?.scoredata?.name}
        matchWinner={props?.scoredata?.matchWinner}
        status={props?.scoredata?.status}
        venue={props?.scoredata?.venue}
        matchType={props?.scoredata?.matchType}
        score={props?.scoredata?.score}
      />
      <div className="latest_result_wrappwer float_left">
        <div className="container">
          <ScorecardList
            teams={props?.scoredata?.teams}
            scorecard_team_1={props?.scoredata?.scorecard[0]}
            scorecard_team_2={props?.scoredata?.scorecard[1]}
          />
        </div>
      </div>
    </>
  );
};

export default Scorecard;
