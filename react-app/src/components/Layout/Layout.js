import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Layout.scss";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
      <React.Fragment>
        <Header/>
        <main>{props.children}</main>
        <Footer/>
      </React.Fragment>
  );
};

export default Layout;
