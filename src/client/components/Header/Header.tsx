import React, { Fragment } from 'react';

import './Header.css';

type HeaderProps = {};

interface DefaultProps {}

class Header extends React.Component<HeaderProps & DefaultProps> {
  static defaultProps: DefaultProps = {};

  render() {
    return (
      <Fragment>
        <div className='main-header'> Header</div>
      </Fragment>
    );
  }
}

export default Header;
