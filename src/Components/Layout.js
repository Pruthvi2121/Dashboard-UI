
import React from 'react';
import { Footer } from './Footer';
import { SideBar } from './SideBar';
import { Header } from './Header';

function Layout({ children }) {
  return (
    <div className='scrollbar-hide'>
      
      
      <nav>
      
      </nav>
      
      <main className='flex '>

      <SideBar/>
        <div className='mx-auto'>
        <Header/>
        {children}
        </div>
        
      </main>
    
    </div>
  );
}

export default Layout;