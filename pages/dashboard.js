import React from 'react';
import Nav from '../components/nav';

function Dashboard() {
   return (
       <>
     <div>
          <Nav />
          <h1>Dashboard  Page</h1>
           <p>You can't go into this page if you are not authenticated.</p>
      </div>
      </>
     )
}
export default Dashboard;