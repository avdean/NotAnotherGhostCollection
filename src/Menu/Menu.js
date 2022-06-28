import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Menu.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" target="_blank" href="https://instagram.com/not.another.ghost.collection">
        Instagram
      </a>
      <a className="menu-item" target="_blank" href="https://not-another-ghost-collection.gitbook.io/nagc-documentation/">
        Documentation
      </a>
    </Menu>
  );
};
