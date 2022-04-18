export const AppError = ({error }) => {
  return (
    <div className="app-error d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <div className="container text-center">
        <h1 className="">Sorry, something went wrong.</h1>
        <p className="lead">
          <span id="error">Error: </span> {error}
        </p>
      </div>
    </div>
  );
};

export const AppLoading = () => {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <h1 className="loading">Loading...</h1>
    </div>
  );
};
