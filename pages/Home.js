import Client from '../components/clients';
import Faq from '../components/faq';
import Footer from '../components/footer';
import Grid from '../components/grid';
import Header from '../components/header';
import Nav from '../components/nav';
import Slide from '../components/slide';

const Home = () => 
  <div>
    <Nav></Nav>
    <Header></Header>
    <Slide></Slide>
    <Grid></Grid>
    <Client></Client>
    <Faq></Faq>
    <Footer></Footer>
  </div> 
;

export default Home;