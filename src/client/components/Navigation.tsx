import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

interface SideBarProps {}

interface DefaultProps {}

class Navigation extends React.Component<SideBarProps & DefaultProps> {
  render() {
    return (
      <section id='navigation' role='navigation'>
        <div className='ui inverted vertical menu'>
          <NavLink to='/dashboard' className='item' activeClassName='active'>
            <div className='navbar-item__content'>
              <Icon name='dashboard' size='big' />
              <p className='navbar-item__title'>Dashboard</p>
            </div>
          </NavLink>
        </div>
      </section>
    );
  }
}

export default Navigation;
