import React, { Component } from 'react';

import './theme/css/clean-blog.css';

import NavBar from './Nav';
import Header from './Header';


class Layout extends Component {

  render() {
    return (
      <div className="Layout" >
        <NavBar brand={"Blog Name"} navbarItems={["menuItem1","menuItem2","menuItem3"]} />
        <Header siteHeading={"Site Heading"} siteSubHeading={"Site Subheading"} />
      </div >
    );
  }
}

export default Layout;
