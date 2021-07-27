import Client from '../components/clients';
import Faq from '../components/faq';
import Footer from '../components/footer';
import Grid from '../components/grid';
import Header from '../components/header';
import Cards from '../components/headercards';
import Nav from '../components/nav';

const Home = () => 
  <div>
    <Nav></Nav>
    <Header></Header>
    <Cards></Cards>
    <Grid></Grid>
    <Client></Client>
    <Faq></Faq>
    <Footer></Footer>
  </div> 
;

export default Home;