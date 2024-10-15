const About = () => {
  return (
    <div
      style={{
        padding: ".5rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          padding: "1rem",
          fontSize: "var(--h1)",
          color: "white",
        }}
      >
        Finnish Emblem
      </h1>
      <p
        style={{
          padding: "1.5rem",
          fontSize: "1.5rem",
          color: "white",
          textAlign: "justify",
        }}
      >
        This project is dedicated to exploring the rich regional tapestry of
        Finland! Immerse yourself in the fascinating details of Finland's 19
        regions, each adorned with its unique coat of arms. The country has
        undergone various historical events that have shaped it, and these
        events have given rise to specific cultural and traditional traits,
        reflected in the coat of arms. The project provides a brief description
        of each emblem, including when it was formed and by whom. You can find
        current information on the population, weather, and location of each
        region and municipality. For a fun twist, test your knowledge with the
        interactive quiz, challenging you to match regions and municipalities
        with their distinctive coat of arms.
      </p>
    </div>
  );
};

export default About;
