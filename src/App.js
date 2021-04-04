import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Products from "./components/Products/Products"
// import axios from 'axios';
// import Main from './main'
import './App.css';

function App() {
  // const data = axios.get("https://60678eaf98f405001728ef55.mockapi.io/api/v1/product/")
  // .then(response => console.log("response", response.data))

  
  

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
