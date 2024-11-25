const SearchError = () => {
  return (
    <div
      style={{
        padding: ".5rem",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="src/pages/Errors/stoat-artist-errorPage.png"
        alt="Error image"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            textAlign: "center",

            fontSize: "var(--h1)",
            color: "white",
          }}
        >
          No blazon, no crest — just an empty field.
        </p>
        <p>
          <span className="error-pg-redirectHome">
            <a href="/coat-of-arms/#/home" style={{ textDecoration: "none" }}>
              Head back
            </a>
          </span>
          and try another coat of arms.
        </p>
      </div>
    </div>
  );
};

export default SearchError;
