import { useParams } from "react-router-dom";
import "./inner_style.css";
import axios from "../Config/Api";
import { useEffect, useState } from "react";
import Scorecard from "../Components/Scorecard";

const ScoreboardResultPage = () => {
  const { id } = useParams();
  const [scorecard, setScorecard] = useState<any>([]);

  useEffect(() => {
    axios
      .get(`match_scorecard/?id=${id}`)
      .then((matchScore: any) => {
        console.log("matchScore -- ", matchScore);
        setScorecard(matchScore);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      <Scorecard scoredata={scorecard?.data?.data} />
    </>
  );
};

export default ScoreboardResultPage;
