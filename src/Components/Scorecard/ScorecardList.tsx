import React from "react";

const ScorecardList = ({ teams, scorecard_team_1, scorecard_team_2 }: any) => {
  console.log("scorecard_team_1  -- ", scorecard_team_1);

  const scoreCardBatting = (batting: any) => {
    return batting?.map((bats: any, index: number) => {
      return (
        <tr key={index}>
          <td>{bats?.batsman?.name}</td>
          <td>{bats?.bowler?.name}</td>
          <td>{bats.r}</td>
          <td>{bats.b}</td>
          <td>{bats.sr}</td>
          <td>{bats["4s"]}</td>
          <td>{bats["6s"]}</td>
        </tr>
      );
    });
  };

  const scoreCardBowler = (bowler: any) => {
    return bowler?.map((bowl: any, index: number) => {
      return (
        <tr key={index}>
          <td>{bowl?.bowler?.name}</td>
          <td>{bowl.o}</td>
          <td>{bowl.r}</td>
          <td>{bowl.w}</td>
          <td>{bowl.eco}</td>
          <td>{bowl.m}</td>
        </tr>
      );
    });
  };
  return (
    <>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            {teams ? teams[0] : ""}
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            {teams ? teams[1] : ""}
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>BATSMEN</th>
                <th></th>
                <th>RUNS</th>
                <th>BALLS</th>
                <th>SR</th>
                <th>4s</th>
                <th>6S</th>
              </tr>
            </thead>
            <tbody>{scoreCardBatting(scorecard_team_1?.batting)}</tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>
                  ({scorecard_team_1?.totals.W} wickets, {scorecard_team_1?.totals.O} overs)
                </td>
                <td>{scorecard_team_1?.totals.R}</td>
                <td>rr {scorecard_team_1?.totals.RR}</td>
              </tr>
            </tfoot>
          </table>

          <table className="table table-striped">
            <thead>
              <tr>
                <th>BOWLER</th>

                <th>O</th>
                <th>R</th>
                <th>W</th>
                <th>ECON</th>
                <th>Maiden</th>
              </tr>
            </thead>
            <tbody>{scoreCardBowler(scorecard_team_1?.bowling)}</tbody>
            <tfoot>
              <tr>
                <td>extras:</td>
                <td>
                  (b {scorecard_team_1?.extras.b} lb {scorecard_team_1?.extras.lb} nb {scorecard_team_1?.extras.nb} p{" "}
                  {scorecard_team_1?.extras.p} r {scorecard_team_1?.extras.r} w {scorecard_team_1?.extras.w})
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
        <table className="table table-striped">
            <thead>
              <tr>
                <th>BATSMEN</th>
                <th></th>
                <th>RUNS</th>
                <th>BALLS</th>
                <th>SR</th>
                <th>4s</th>
                <th>6S</th>
              </tr>
            </thead>
            <tbody>{scoreCardBatting(scorecard_team_2?.batting)}</tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>
                  ({scorecard_team_2?.totals.W} wickets, {scorecard_team_2?.totals.O} overs)
                </td>
                <td>{scorecard_team_2?.totals.R}</td>
                <td>rr {scorecard_team_2?.totals.RR}</td>
              </tr>
            </tfoot>
          </table>

          <table className="table table-striped">
            <thead>
              <tr>
                <th>BOWLER</th>

                <th>O</th>
                <th>R</th>
                <th>W</th>
                <th>ECON</th>
                <th>Maiden</th>
              </tr>
            </thead>
            <tbody>{scoreCardBowler(scorecard_team_2?.bowling)}</tbody>
            <tfoot>
              <tr>
                <td>extras:</td>
                <td>
                  (b {scorecard_team_2?.extras.b} lb {scorecard_team_2?.extras.lb} nb {scorecard_team_2?.extras.nb} p{" "}
                  {scorecard_team_2?.extras.p} r {scorecard_team_2?.extras.r} w {scorecard_team_2?.extras.w})
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default ScorecardList;
