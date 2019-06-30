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
          <NavLink to='/devices' className='item' activeClassName='active'>
            <div className='navbar-item__content'>
              <Icon name='laptop' size='big' />
              <p className='navbar-item__title'>Devices</p>
            </div>
          </NavLink>
          <NavLink to='/events' className='item' activeClassName='active'>
            <div className='navbar-item__content'>
              <Icon name='calendar alternate outline' size='big' />
              <p className='navbar-item__title'>Events</p>
            </div>
          </NavLink>
          <NavLink to='/reports' className='item' activeClassName='active'>
            <div className='navbar-item__content'>
              <Icon name='chart bar' size='big' />
              <p className='navbar-item__title'>Reports</p>
            </div>
          </NavLink>
          <NavLink
            to='/configuration'
            className='item'
            activeClassName='active'
          >
            <div className='navbar-item__content'>
              <Icon name='setting' size='big' />
              <p className='navbar-item__title'>Configuration</p>
            </div>
          </NavLink>
          <NavLink to='/help' className='item' activeClassName='active'>
            <div className='navbar-item__content'>
              <Icon name='question' size='big' />
              <p className='navbar-item__title'>Help</p>
            </div>
          </NavLink>
          <NavLink to='/logout' className='item' activeClassName='active'>
            <div className='navbar-item__content'>
              <Icon name='log out' size='big' />
              <p className='navbar-item__title'>Logout</p>
            </div>
          </NavLink>
        </div>
      </section>
    );
  }
}

export default Navigation;
