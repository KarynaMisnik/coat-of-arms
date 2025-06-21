//Appears when Search result does not exist
const SearchError = () => {
  return (
    <div id="searchError-page-wrpper">
      <img
        className="searchError-img"
        src="/coat-of-arms/img/stoat-artist-errorPage.png"
        alt="Error image"
        loading="lazy"
      />
      <div className="searchError-text-container">
        <p className="searchError-error-text firstPart">
          No blazon, no crest — just an empty field.
        </p>
        <p className="searchError-error-text secondPart">
          <span className="searchError-redirectHome">
            <a
              className="searchError-redirectHome-link"
              href="/coat-of-arms/#/home"
            >
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
