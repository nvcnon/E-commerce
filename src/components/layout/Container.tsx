import type React from "react";

type Container = { 
    children : React.ReactNode
}

const Container = ({children} : Container) => {
    return (
        <div className='container mx-auto'>
          {children}  
        </div>
    );
}

export default Container;
