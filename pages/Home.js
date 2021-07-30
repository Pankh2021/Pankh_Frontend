import Client from '../components/clients';
import Faq from '../components/faq';
import Footer from '../components/footer';
import Grid from '../components/grid';
import Header from '../components/header';
import Location from '../components/location';
import Nav from '../components/nav';
import Slide from '../components/slide';

const Home = () => 
  <div>
    <Nav></Nav>
    <Header></Header>
    <Slide></Slide>
    <Grid></Grid>
    <Location></Location>
    <Client></Client>
    <Faq></Faq>
    <Footer></Footer>
  </div> 
;

export default Home;