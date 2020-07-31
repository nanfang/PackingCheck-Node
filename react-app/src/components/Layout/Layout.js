import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Layout.css";

const Layout = (props) => (
  <React.Fragment>
    <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-warning">
        <div className="container-fluid">
          <a href="index.html" className="navbar-brand">
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
                <a href="#" className="btn btn-outline-dark">
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
        <div className="row p-4">
          <div className="col-sm text-center mr-5">
            <h2>Packs</h2>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your next destination"
              />
              <div className="input-group-append">
                <button className="input-group-text">Create a new pack</button>
              </div>
            </div>
            <ul className="list-group text-left">
              <li className="list-group-item">
                Trip to Beijing
                <div className="float-right text-muted">Remove</div>
              </li>
              <li className="list-group-item active">
                Trip to Wuhan
                <div className="float-right text-muted">Remove</div>
              </li>
              <li className="list-group-item">
                Trip to Shanghai
                <div className="float-right text-muted">Remove</div>
              </li>
              <li className="list-group-item">
                Trip to Beidaihe
                <div className="float-right text-muted">Remove</div>
              </li>
              <li className="list-group-item">
                Trip to Lijiang
                <div className="float-right text-muted">Remove</div>
              </li>
            </ul>
          </div>

          <div className="col-sm text-center">
            <h2>Packing Items</h2>
            <div className="card" style={{ width: "90%" }}>
              <div className="card-body">
                <h5 className="card-title">Your trip to Beijing</h5>
                <h6 className="card-subtitle mb-2 text-muted">Checklist</h6>
                <div className="card-text text-left">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item far fa-plus-spuare">
                      Cras justo odio
                      <div className="float-right text-danger ml-2">⊗</div>
                      <div className="float-right text-warning">△ ▽</div>  
                    </li>
                    <li className="list-group-item">
                      Dapibus ac facilisis in
                      <div className="float-right text-danger ml-2">⊗</div>
                      <div className="float-right text-warning">△ ▽</div>
                    </li>
                    <li className="list-group-item">
                      Morbi leo risus
                      <div className="float-right text-danger ml-2">⊗</div>
                      <div className="float-right text-warning">△ ▽</div>
                    </li>
                    <li className="list-group-item">
                      Porta ac consectetur ac
                      <div className="float-right text-danger ml-2">⊗</div>
                      <div className="float-right text-warning">△ ▽</div>
                    </li>
                    <li className="list-group-item">
                      Vestibulum at eros
                      <div className="float-right text-danger ml-2">⊗</div>
                      <div className="float-right text-warning">△ ▽</div>
                    </li>
                  </ul>
                  <div className="input-group my-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="New Item"
                    />
                    <div className="input-group-append">
                      <button className="input-group-text">
                        Add a new item
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </section>

    <main>{props.children}</main>

    {/*     <footer
      id="main-footer"
      className="text-center p-2 bg-secondary text-white"
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <p>
              Copyright &copy; <span id="year"></span> PackingCheck
            </p>
          </div>
        </div>
      </div>
    </footer> */}

    <footer
      className="footer bg-secondary text-white fixed-bottom p-2"
      id="main-footer"
    >
      <div className="container">
        <p>
          Copyright &copy; <span id="year"></span> PackingCheck
        </p>
      </div>
    </footer>
  </React.Fragment>
);

export default Layout;
