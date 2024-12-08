import Paper from "@mui/material/Paper";
import RoadMap from "../../components/RoadMap";

const About = () => {
  return (
    <div className="about-page-wrapper">
      <Paper className="about-page-content-container">
        <h1 className="about-page-heading">Finnish Emblem</h1>
        <p className="about-page-text">
          This project is dedicated to exploring the rich regional tapestry of
          Finland! Immerse yourself in the fascinating details of Finland's 19
          regions, each adorned with its unique coat of arms. The country has
          undergone various historical events that have shaped it, and these
          events have given rise to specific cultural and traditional traits,
          reflected in the coat of arms. The project provides a brief
          description of each emblem, including when it was formed and by whom.
          You can find current information on the population, weather, and
          location of each region and municipality. For a fun twist, test your
          knowledge with the interactive quiz, challenging you to match regions
          and municipalities with their distinctive coat of arms.
        </p>
      </Paper>
      <RoadMap />
    </div>
  );
};

export default About;
