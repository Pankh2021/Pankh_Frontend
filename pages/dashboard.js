import React from 'react';
import Footerr from '../components/footer';
import Nav from '../components/nav';

function Dashboard() {
   return (
       <>
       <Nav />
     <div>
          
          <h1>Dashboard  Page</h1>
           <p>You can't go into this page if you are not authenticated.</p>
      </div>
      </>
     )
}
export default Dashboard;