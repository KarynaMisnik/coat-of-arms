/*=== MUI ICONS ===*/
import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from "@mui/icons-material/GitHub";
const About = () => {
  return (
    <div className="about-page-wrapper">
      <div className="about-page-content-container">
        <h1 className="about-page-h1">Finnish Emblem</h1>
        <p className="about-page-text intro-paragraph">
          This project is dedicated to showcasing the unique coat of arms and
          municipalities of Finland. This app provides an interactive guide to
          the coat of arms, population data, weather, and more. Whether you're a
          local looking to explore new areas or a foreigner fascinated by
          Finnish heritage, this app offers a deeper understanding of the
          country's diverse culture and unique locations. Perfect for travelers,
          history enthusiasts, and anyone curious about Finland's hidden gems.
        </p>
        <h2 className="about-page-h2">Why I Decided to Build This App</h2>
        <p>
          During my travels around Finland, I noticed road signs featuring the
          coats of arms of various municipalities. This sparked my curiosity
          about the stories behind these symbols—what they represent, their
          meanings, and how they connect to Finland's history and culture. I
          wanted to explore these designs and make that information easily
          accessible to others. This inspired me to create an app that brings
          the rich history and symbolism of Finland’s municipalities to life.
        </p>
        <h2 className="about-page-h2">The Finnish Emblem is designed for:</h2>
        <ul className="about-page-target-audience">
          <li>
            <span>Foreigners</span> who are falling in love with Finland and
            want to learn about its history, with the user interface available
            in English.
          </li>
          <li>
            <span>Locals</span> who are motivated to explore more of their
            country and discover new regions.
          </li>
          <li>
            <span>People of all ages</span>—both young and old—who are
            interested in studying the history and events that shaped Finnish
            culture and mentality.
          </li>
          <li>
            <span>Travel enthusiasts</span> and curious individuals who enjoy
            discovering small, untouched, and undiscovered locations around
            Finland.
          </li>
        </ul>
        <h2 className="about-page-h2">
          How is Finnish Emblem built (For developers*)
        </h2>
        I am developing a single-page application (SPA) using React.js in a Vite
        environment. The app focuses on providing detailed information about
        Finnish regions and municipalities. To fetch and display this data, I
        use a custom JSON file as an inner API. For additional data:
        <ul className="about-page-for-developers">
          <li>
            Population data is fetched from the Statistics Finland (stat.fi)
            API.
          </li>
          <li>Weather data is retrieved from the OpenMeteo API.</li>
        </ul>
        For styling, I combine custom CSS with Material-UI (MUI) components to
        achieve both unique designs and standardized layouts. The app integrates
        the Leaflet library with OpenStreetMap API to display interactive maps,
        showing the location of municipalities. Deployment is managed using
        GitHub Pages, with configurations to support SPA routing.
        <h2 className="about-page-h2">What are the plans for Finnish Emblem</h2>
        I plan to enhance the app with an interactive quiz focused on the
        regions and municipalities' coat of arms. This feature aims to make
        learning about Finnish regions both fun and educational. To further
        engage users, I will introduce an achievements system, rewarding users
        for their progress and encouraging them to explore more. In the long
        term, I intend to deploy the app on Google Play to make it easily
        accessible to a wider audience, allowing everyone to engage with Finnish
        geography and culture.
        <h2 className="about-page-h2">Contact</h2>
        <p className="about-page-text contact-details">
          Did you spot a mistake, notice something wrong, or want to contribute
          to improving the app? Please open an issue in the project's repository
          on GitHub at
          <a href="https://github.com/KarynaMisnik/coat-of-arms/issues">
            <GitHubIcon className="github-contact" />
          </a>
          page .
        </p>
        <br />
        <p className="about-page-text developer-details">
          This app was created by a passionate developer with a deep
          <FavoriteIcon className="heart-icon" />
          to Finnish culture and heritage.
        </p>
      </div>
    </div>
  );
};

export default About;
