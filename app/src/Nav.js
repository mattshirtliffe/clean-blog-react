import React, {Component} from 'react'

class NavbarMenuItem extends Component {
    render() {
        return (
            <li>
                <a href="index.html">{this.props.navbarItem}</a>
            </li>
        );
    }
}

class NavbarMenuItems extends Component {

    render() {
        var navbarItems = this.props.navbarItems.map(function(name, index) {
            console.log(name);
            return <NavbarMenuItem key={index} navbarItem={name}/>;
        });
        return (
            <ul className="nav navbar-nav navbar-right">
                {navbarItems}
            </ul>
        );
    }
}

class NavbarMenu extends Component {
    render() {
        return (
            <div className="NavbarMenu">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <NavbarMenuItems navbarItems={this.props.navbarItems}/>
                </div>
            </div >
        );
    }
}

class NavbarBrand extends Component {
    render() {
        return (
            <div className="NavbarBrand">
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
            <div className="NavBar">
                <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
                    <div className="container-fluid">

                        <NavbarBrand brand={this.props.brand}/>
                        <NavbarMenu navbarItems={this.props.navbarItems}/>
                    </div>

                </nav>
            </div >
        );
    }
}

export default NavBar;
