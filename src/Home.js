import React from "react";
import Iris from "./components/irisdata/Iris";
import Base from "./components/UI/Base";

const Home = ({ className = "bg-white text-dark p-4", children }) => {
  return (
    <Base className={className}>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">The Shit IT</h1>
          <p className="lead">
            we are the problem solver but with shit skills.
          </p>
        </div>
      </div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <span className="navbar-text"></span>
        </div>
      </nav>

      <h1>Playing Iris Dataset</h1>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Iris Dataset</h5>
                <p className="card-text">
                  The Iris dataset was used in R.A. Fisher's classic 1936 paper,
                  The Use of Multiple Measurements in Taxonomic Problems, and
                  can also be found on the UCI Machine Learning Repository. It
                  includes three iris species with 50 samples each as well as
                  some properties about each flower. One flower species is
                  linearly separable from the other two, but the other two are
                  not linearly separable from each other. Things you can do with
                  this visualization.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Select the filter for axis</li>
                <li className="list-group-item">Hover over dot</li>
                <li className="list-group-item">Hover over legend</li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <Iris />
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;
