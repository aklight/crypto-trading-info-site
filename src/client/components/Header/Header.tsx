import React from 'react';

import './Header.css';

type HeaderProps = {};

interface DefaultProps {}

class Header extends React.Component<HeaderProps & DefaultProps> {
  static defaultProps: DefaultProps = {};

  render() {
    return <div className='main-header' />;
  }
}

export default Header;
