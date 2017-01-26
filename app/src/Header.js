import React, {Component} from 'react'
import homebg from './theme/img/home-bg.jpg';

class Header extends Component {
    render() {
        return (
          <div className="Header">
            <header
              className="intro-header"
              style={{backgroundImage: 'url('+ homebg  +')'}}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                      <div className="site-heading">
                        <h1>
                          {this.props.siteHeading}
                        </h1>
                        <hr className="small" />
                        <span className="subheading">
                          {this.props.siteSubHeading}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
            </header>

          </div >
        );
    }
}

export default Header;
