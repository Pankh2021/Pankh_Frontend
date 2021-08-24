import Client from '../components/clients';
import Faq from '../components/faq';
import React from 'react'
import Service from '../components/service'
import Header from '../components/header';
import Nav from '../components/nav';
import Daas from '../components/daas';
import Location from '../components/location';
import Registerpilot from '../components/registerpilot';
import Drones from '../components/drones';
import Footerr from '../components/footer';

function Home(){
return (
  <div>
    <Nav></Nav>
    <Header></Header>
    <Service></Service>
    <Drones></Drones>
    <Daas></Daas>
    <Location></Location>
    <Registerpilot></Registerpilot>
    <Client></Client>
    <Faq></Faq>
    <Footerr></Footerr>
  </div> 
  )
}

export default Home;