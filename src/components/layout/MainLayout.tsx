import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface MainLayout {
    children : React.ReactNode
}

const MainLayout = ({children} : MainLayout) => {
    return (
        <>
          <Navbar /> 
          {children}  
          <Footer /> 
        </>
    );
}

export default MainLayout;
