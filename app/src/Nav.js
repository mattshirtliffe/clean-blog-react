import React, { Component } from 'react';

import './theme/css/clean-blog.css';
import './theme/vendor/bootstrap/css/bootstrap.css';
import './theme/vendor/font-awesome/css/font-awesome.css';

class NavbarMenu extends Component {
  render() {
    return (
      <div className="NavbarMenu" >
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="about.html">About</a>
                </li>
                <li>
                    <a href="post.html">
                        Sample Post
                    </a>
                </li>
                <li>
                    <a href="contact.html">Contact</a>
                </li>
            </ul>
        </div>
      </div >
    );
  }
}


class NavbarBrand extends Component {
  render() {
    return (
      <div className="NavbarBrand" >
        <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">
                    Toggle navigation
                </span>
                Menu
                <i className="fa fa-bars"/>
            </button>
            <a className="navbar-brand" href="index.html">
                {this.props.brand}
            </a>
        </div>
      </div >
    );
  }
}


class NavBar extends Component {
  render() {
    return (
      <div className="NavBar" >
        <nav className="navbar navbar-default navbar-custom navbar-fixed-top" >
          <div className="container-fluid">

              <NavbarBrand brand={this.props.brand} />
              <NavbarMenu />
          </div>

        </nav>
      </div >
    );
  }
}

export default NavBar;
