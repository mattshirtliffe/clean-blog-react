import React, { Component } from 'react';

import './theme/css/clean-blog.css';
import './theme/vendor/font-awesome/css/font-awesome.min.css';

import NavBar from './Nav';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';



class Layout extends Component {

  render() {
    var postPreviews= [{postTitle:"Post Title1" ,postSubTitle:"Post Subtitle1", postMeta:"Post Meta1"},{postTitle:"Post Title2" ,postSubTitle:"Post Subtitle2", postMeta:"Post Meta2"},{postTitle:"Post Title3" ,postSubTitle:"Post Subtitle3", postMeta:"Post Meta3"}]

    return (
      <div className="Layout" >
        <NavBar brand={"Blog Name"} navbarItems={["menuItem1","menuItem2","menuItem3"]} />
        <Header siteHeading={"Site Heading"} siteSubHeading={"Site Subheading"} />
        <Content postPreviews={postPreviews}/>
        <Footer copyRightText={"Copyright © Matthew Shirtliffe 2016"} />
      </div >
    );
  }
}

export default Layout;
