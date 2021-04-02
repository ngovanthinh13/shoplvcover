import Header from '../Header/Header'
import Nav from '../Nav/Nav'
// import Content from '../Home'
import Footer from '../Footer/Footer'

// import Main from './main'
import './Login.css';

function Login() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
      </div>
      <hr />
      <div className='container'>
        <Nav />
      </div>
      <div className='content'>
            {/*---- phan form login -----------------*/}
            <h1>My ACCOUNT</h1>
            <hr />
            <h2>MEMBERS PLEASE SIGN IN</h2>
            {/* <p>Login*</p> */}
            <form>
              <label>Login*</label><br/>
              <input></input><br/>
              <label>PASSWORD*</label><br/>
              <input></input>  <br/>
              <a>Forgot your passowrd?</a><br/>
              <button>Sign in</button>

            </form>

            
             {/*---- phan form login -----------------*/}
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

export default Login;
