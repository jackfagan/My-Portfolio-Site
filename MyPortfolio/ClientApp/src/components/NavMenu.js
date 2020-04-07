import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './_nav-menu.scss';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
      return (
        <div className="navbar">
              <a href="https://github.com/jackfagan"><img class="github" src="https://cdn.iconscout.com/icon/free/png-256/github-160-734866.png"/></a>
              <a  href="https://twitter.com/jackfagan01"><img src="https://webstockreview.net/images/twitter-icon-png-6.png" /></a>
              <a href="https://www.linkedin.com/in/jack-fagan-266930162/"><img src="https://img.icons8.com/ios/500/linkedin.png" /></a>
              <hr />
        </div>
    );
  }
}
