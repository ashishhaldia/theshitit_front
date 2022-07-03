import React from "react";

const Base = ({ className = "bg-dark text-white p-4", children }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            TheShitIt
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Data Visualization
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  AI
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  working with API
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={className}>{children}</div>
      <footer className="footer bg-light mt-auto py-3">
        <div className="container-fluid bg-white text-black text-center py-3">
          <h4>More projects Coming soon</h4>
          <button className="btn btn-dark btn-lg"> Contact US</button>
          <div className="container">
            <span className="text-black">This button is not working</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Base;
