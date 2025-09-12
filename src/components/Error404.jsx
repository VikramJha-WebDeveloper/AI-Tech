import React from "react";

const Error = () => {
  return (
    <div id="error" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col col-12 d-flex align-items-center justify-content-center flex-column">
            <i class="fa-solid fa-triangle-exclamation fs-1 text-primary"></i>
            <h1 className="display-1 fw-bolder">404</h1>
            <h2 className="display-6 fw-bolder">Page Not Found</h2>
            <p className="text-center my-3">
              We’re sorry, the page you have looked for does not exist in our
              website! Maybe go to our home page or try to use a search?
            </p>
            <button
              className="btn border p-3 px-5 text-light bg-primary rounded-pill
                "
            >
              Go Back To Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
