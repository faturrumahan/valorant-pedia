import { React, Fragment } from "react";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main className="relative">{props.children}</main>
    </Fragment>
  );
};

export default Layout;
