import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <a href="https://jjrajani.github.io"><h1>Jenna Rajani</h1></a>
      <a href="https://github.com/jjrajani/stateless-react-mobx-filter" target="blank"><i className="fa fa-github"></i></a>
      <a href="https://jjrajani.github.io">Portfolio</a>
    </div>
  );
}

export default Header;
