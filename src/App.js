import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'

// import Main from './main'
import './App.css';

function App() {
  return (
    <div className="">
      <div className='container'>
        {/* <Header /> */}
      </div>
      {/* <hr /> */}
      <div className='sticky_nav'>
        <div className='container'>
          <Nav />
        </div>
      </div>
      <div className='container content_fixed'>
        <Content />
      </div>

      <div className='footer_main'>
        <div className='container'>
          <Footer />
        </div>
      </div>


    </div>
  );
}

export default App;
