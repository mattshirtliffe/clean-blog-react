import React, { Component } from 'react';

import './theme/css/clean-blog.css';
import './theme/vendor/bootstrap/css/bootstrap.css';
import './theme/vendor/font-awesome/css/font-awesome.css';

import NavBar from './Nav';


class Layout extends Component {
  render() {
    return (
      <div className="Layout" >
        <NavBar brand={"Blog Name"} />
      </div >
    );
  }
}

export default Layout;
