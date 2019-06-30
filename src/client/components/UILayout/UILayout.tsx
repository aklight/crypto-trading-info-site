import React, { ReactNode } from 'react';
import Header from '../Header';
import Navigation from '../Navigation';

import './UILayout.css';

type UILayoutProps = {
  children: ReactNode;
};

const UILayout = (props: UILayoutProps) => {
  return (
    <div className='container'>
      <header>
        <Header />
      </header>

      <aside className='left'>
        <nav className='menu'>
          <Navigation />
        </nav>
      </aside>

      <main>{props.children}</main>

      <footer>footer</footer>
      <div className='size-notice' />
      <div className='absolute-wrapper'>
        <aside className='absolute' />
      </div>
    </div>
  );
};

export default UILayout;
