import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="layout-content">
        <SideBar />
        <div className="main-content-area">
          <Breadcrumbs />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
