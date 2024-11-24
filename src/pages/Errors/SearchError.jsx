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
        backgroundColor: "var(--white)",
      }}
    >
      <img
        src="src/pages/Errors/errorPg-stoat-detective.png"
        alt="Error image"
      />
      <h1
        style={{
          textAlign: "center",
          padding: "1rem",
          fontSize: "var(--h1)",
          color: "white",
        }}
      >
        ERRORs
      </h1>
    </div>
  );
};

export default SearchError;
