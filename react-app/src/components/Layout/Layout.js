import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Layout.scss";
import icon from "./img/new_icon.png";

const Layout = (props) => (
  <React.Fragment>
    <header>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container-fluid">
          <a href="index.html" className="navbar-brand">
            <img src={icon} className="img-fluid mr-2 py-2" />
            Packing Check
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="index.html" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Sign In
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="btn btn-sm btn-outline-dark my-1 py-0">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <section id="main-content">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md">
            <div className="card bg-white">
              <div
                className="card-header mx-auto shadow p-3 bg-white rounded vert-offset-top"
                style={{ width: "98%" }}
              >
                <h4 className="card-title text-left">Packs</h4>
                <div
                  className="input-group mb-3 mx-auto"
                  style={{ width: "100%" }}
                >
                  <input
                    type="text"
                    className="form-control"
                    id="destination"
                    placeholder="Your next destination"
                  />
                  <div className="input-group-append">
                    <button className="input-group-text">
                      Create a new pack
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <ul className="list-group text-left">
                  <li className="list-group-item">
                    Trip to Beijing
                    <a href="#" className="float-right">
                      Remove
                    </a>
                  </li>
                  <li className="list-group-item active">
                    Trip to Wuhan
                    <a href="#" className="float-right">
                      Remove
                      <div className="float-right offset-right">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          class="bi bi-chevron-right"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </div>
                    </a>
                  </li>
                  <li className="list-group-item">
                    Trip to Shanghai
                    <a href="#" className="float-right">
                      Remove
                    </a>
                  </li>
                  <li className="list-group-item">
                    Trip to Beidaihe
                    <a href="#" className="float-right">
                      Remove
                    </a>
                  </li>
                  <li className="list-group-item">
                    Trip to Lijiang
                    <a href="#" className="float-right">
                      Remove
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md">
            <div className="card packing-items">
              <div className="card-header mx-auto" style={{ width: "100%" }}>
                <div className="float-left">
                  <h4 className="card-title text-left">Your trip to Wuhan </h4>
                  <h6 className="card-subtitle text-left text-muted">
                    Checklist
                  </h6>
                </div>
                <div className="float-right">
                  <button className="btn btn-info btn-lg mt-1">Start Checking</button>
                </div>
              </div>
              <div className="card-body">
                <div className="card-text text-left">
                  <div
                    className="input-group mb-3 mx-auto"
                    style={{ width: "100%" }}
                  >
                    <input
                      type="text"
                      className="form-control"
                      id="add-item"
                      placeholder="Add new item"
                    />
                    <div className="input-group-append">
                      <button className="input-group-text">+</button>
                    </div>
                  </div>
                  <table className="table table-striped table-responsive-sm text-muted">
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Cras justo odio</td>
                        <td>
                          {" "}
                          <div className="float-right my-text-primary-color ml-2">
                            <a href="">⊗</a>
                          </div>
                          <div className="float-right my-text-primary-color">
                            <a href="" className="px-2">
                              △
                            </a>
                            <a href="">▽</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Dapibus ac facilisis in</td>
                        <td>
                          {" "}
                          <div className="float-right my-text-primary-color ml-2">
                            <a href="">⊗</a>
                          </div>
                          <div className="float-right my-text-primary-color">
                            <a href="" className="px-2">
                              △
                            </a>
                            <a href="">▽</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Porta ac consectetur ac</td>
                        <td>
                          {" "}
                          <div className="float-right my-text-primary-color ml-2">
                            <a href="">⊗</a>
                          </div>
                          <div className="float-right my-text-primary-color">
                            <a href="" className="px-2">
                              △
                            </a>
                            <a href="">▽</a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </section>

    <main>{props.children}</main>

    <footer className="footer text-muted fixed-bottom" id="main-footer">
      <div className="container">
        <p>
          Copyright &copy; <span id="year"></span> PackingCheck
        </p>
      </div>
    </footer>
  </React.Fragment>
);

export default Layout;
