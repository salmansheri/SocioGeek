import React from 'react'; 
import NavbarCard from './NavbarCard';

import Appbar from './Appbar';

const Layout = ({children}) => {
  return (
    <>
    <Appbar />
     <div className="flex mt -4 max-w-4xl mx-auto gap-4">
        <div className="w-1/3">
        <NavbarCard />
         
        </div>
        <div>
          <div className="grow">
            
            {children}
        
          </div>
        </div>
      </div>

    </>
   
  )
}

export default Layout