import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from "@mui/icons-material/GitHub";
const About = () => {
  return (
    <div className="about-page-wrapper">
      <div className="about-page-content-container">
        <h1 className="about-page-h1">Finnish Emblem</h1>
        <p className="about-page-text intro-paragraph">
          This project is dedicated to showcasing the unique coat of arms and
          municipalities of Finland.
        </p>

        <h2 className="about-page-h2">The Key Features of the App:</h2>
        <ul className="about-page-list project-key-features ">
          <li>
            Discover Regions: Explore a grid of images showcasing Finland's
            unique regions, each with its own history, and distinctive coat of
            arms.
          </li>
          <li>
            Discover Municipalities: Browse a grid of images showcasing
            Finland's diverse municipalities.
          </li>
          <li>
            Learn the History: Uncover the stories behind the symbols on each
            coat of arms.
          </li>
          <li>
            Explore the Map: See where each municipality is located and how it
            fits into the bigger picture of Finland.
          </li>
          <li>
            Population Insights: Get up-to-date demographic details for each
            area.
          </li>
        </ul>

        <h2 className="about-page-h2">How to Use the App</h2>
        <ul className="about-page-list project-use-instructions">
          <li>
            <h2 className="about-page-h2">Start on the Home Page</h2>
            <p>
              Begin your journey by exploring a grid of Finnish regions. Each
              region is displayed with its coat of arms and a brief description.
            </p>
          </li>

          <li>
            <h2 className="about-page-h2">Dive into a Region</h2>
            <p>
              Click on a region to discover all the municipalities that belong
              to it. You'll also find details about the region itself,
              including:
            </p>
            <ul className="about-page-list ">
              <li>Its coat of arms.</li>
              <li>A short historical overview.</li>
              <li>Its location on the map.</li>
            </ul>
          </li>

          <li>
            <h2 className="about-page-h2">Explore Municipalities</h2>
            <p>
              Within a region, view a list of both current municipalities and
              former municipalities (those merged with others over time). Click
              on a municipality to uncover fascinating details about it:
            </p>
            <ul className="about-page-list">
              <li>
                Coat of Arms: View the municipality's coat of arms and read a
                short blazon description.
              </li>
              <li>
                Historical Insights: Learn about the municipality's history and
                the design of its coat of arms, including who created it.
              </li>
              <li>Population Data: See up-to-date population statistics.</li>
              <li>
                Weather Information: Check current weather conditions in the
                municipality.
              </li>
              <li>Geographic Details: Explore its location on the map.</li>
            </ul>
          </li>

          <li>
            <h2 className="about-page-h2">Discover Finland’s Rich History</h2>
            <p>
              Use the app to explore how municipalities have evolved over time,
              from historical mergers to modern developments.
            </p>
          </li>
        </ul>

        <h2 className="about-page-h2">Developer</h2>
        <p className="about-page-text developer-details">
          This app was created by a passionate developer with a deep
          <FavoriteIcon className="heart-icon" />
          to Finnish culture and heritage.
        </p>

        <h2 className="about-page-h2">Contact</h2>
        <p className="about-page-text contact-details">
          Did you spot a mistake or you see that something is wrong, want to
          contribute and help to make the app better? Start the issue in the
          project's repositary at
          <a href="#">
            <GitHubIcon className="github-contact" />
          </a>
          page .
        </p>
      </div>
    </div>
  );
};

export default About;
