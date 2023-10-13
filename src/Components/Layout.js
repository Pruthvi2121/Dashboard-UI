
import React from 'react';
import { Footer } from './Footer';
import { SideBar } from './SideBar';

function Layout({ children }) {
  return (
    <div>
      
      <header>
       
      </header>
      <nav>
      
      </nav>
      <main className='flex'>
        <SideBar/>
        {children}
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;