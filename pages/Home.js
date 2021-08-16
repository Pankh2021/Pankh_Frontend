import Client from '../components/clients';
import Faq from '../components/faq';
import Service from '../components/service'
import Header from '../components/header';
import Nav from '../components/nav';
import Daas from '../components/daas';
import Location from '../components/location';
import Registerpilot from '../components/registerpilot';
import Drones from '../components/drones';
import Footer from '../components/footer';

const Home = () => 
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
    <Footer></Footer>
  </div> 
;

export default Home;