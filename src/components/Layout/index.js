import React from "react";
import Navbar from '../NavBar'
const Layout = ({activeItem, children }) => {

  return <React.Fragment>
  <Navbar activeItem={activeItem}/>
  {children}
  </React.Fragment>;
};
export default Layout;
