import { useState } from "react";
import ResultsTable from "./Results/ResultsTable";

const ResultsComponent = () => {
  const [ipl_series_info] = useState(() => {
    // getting stored value
    const saved: any = localStorage.getItem("ipl_series_info");
    const initialValue: any = JSON.parse(saved);
    return initialValue || "";
  });
  return (
    <>
      <div className="latest_result_wrappwer float_left">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ft_left_heading_wraper">
                <h1>results</h1>
              </div>
            </div>
            <div className="col-md-12 col-sm-12">
              <div className="table_next_race result_match_wrapper overflow-scroll ft_table_cntnt">
                <table>
                  <thead>
                    <tr>
                      <th>date</th>
                      <th>teams</th>
                      <th>won</th>
                      <th>venue</th>
                    </tr>
                    </thead>
                    <tbody>
                        {ipl_series_info?.data?.data.matchList.map((match: any) => (
                            <ResultsTable key={match.id} team_1={match.teams[0]} team_1_id={match.id} team_2_id={match.id} team_2={match.teams[1]} date={match.date} status={match.status} venue={match.venue} />
                        ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultsComponent;
