import Header from '../Header/Header'
import Nav from '../Nav/Nav'
// import Content from '../Home'
import Footer from '../Footer/Footer'

// import Main from './main'
import './Home.css';

function Home() {
  return (
    <div className="App">
      <div className='container'>
        {/* <Header /> */}
      </div>
      {/* <hr /> */}
      <div className='container'>
        <Nav />
      </div>
      {/* <Content /> */}
      <div className='footer_main'>
        <div className='container'>
          <Footer />
        </div>
      </div>


    </div>
  );
}

export default Home;
