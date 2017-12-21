import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './Header/Header.css';
// import 'foundation-sites/dist/css/foundation.min.css';


String.prototype.capitalize = () => this.charAt(0).toUpperCase() + this.slice(1);

const pages = [
  {
    name: 'home',
    route: '/',
  },
  {
    name: 'posts',
    route: '/posts',
  },
  {
    name: 'about',
    route: '/about',
  },
];


export default class Nav extends Component {

  state = {
    activeTab: 'homePage',
  }

  getParent = target => target.tagName === 'LI' ? target : this.getParent(target.parentNode);

  handleOnClick = e => {
    e.stopPropagation();
    // console.log(this.getParent(e.target).id);
    this.setState({
      activeTab: this.getParent(e.target).id,
    });
  }

  render() {
    const Tabs = pages.map((tab, i) => (
      <li
        key={i}
        id={tab.name}
        className={tab.name === this.state.activeTab ? styles.selected : ''}
        onClick={this.handleOnClick}
      >
        <Link
          to={tab.route}
        >{tab.name}</Link>
      </li>
    ));

    return (
      <ul>
        {Tabs}
      </ul>
    );
  }
}
