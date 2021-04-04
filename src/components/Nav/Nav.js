// import './img'
import React, { useState } from 'react';
import './Nav.css';
import {
    Link
} from "react-router-dom";
import search from './img/search.svg'
import person from './img/person.svg'
import bag from './img/bag.svg'


function Nav() {
    const [togglesig, setTogglesig] = useState(false);
    const [togglecart, setTogglecart] = useState(false);
    const [togglesearch, setTogglesearch] = useState(false);
    // const [togglesearch, setTogglesearch] = useState(false);



    function handlelogin(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        setTogglesig(!togglesig);
        setTogglecart(false)
        setTogglesearch(false)
        console.log('The link was clicked.', togglesig);
    }
    function handlecart(e) {
        e.preventDefault();
        setTogglecart(!togglecart);
        setTogglesig(false)
        setTogglesearch(false)
        console.log('The link was clicked - cảt.');
    }
    function handlelsearch(e) {
        e.preventDefault();
        setTogglesearch(!togglesearch);
        setTogglesig(false)
        setTogglecart(false)
        console.log('The link was clicked - cảt.');
    }
    function handlelsearchMain(e) {
        e.preventDefault();
        // setTogglecart(!togglecart);
        // setToggle    sig(false)
        // setTogglesig(!togglesig);

        console.log('The link was clicked - cảt.');
    }
    var modal = document.getElementsByClassName('block_sign');
    // var closeForm = document.getElementsByClassName('close');
    function hanhdclickClose(e) {
        e.preventDefault();
        // console.log('The link was clicked.');
        setTogglesig(!togglesig);
        setTogglecart(false)
        setTogglesearch(false)
        console.log('The link was clicked.', togglesig);
    }

    return (
        <div className='multi_block' onClick={handlelsearchMain}>


            <div className="nav">
                <div className='nav_left'>
                    <ul style={{}}>
                        <li>SHOP</li>
                        <li><Link className='fixurl' to='/product'>HOLIDAY 2020</Link></li>
                    </ul>
                </div>
                <div className='logo'><Link className='fixurl' to='/'>ESSENTIALS</Link></div>
                <div className='nav_right'>
                    <ul>
                        <li>
                            {/* ---- */}
                            <div className={togglesearch ? 'block_search' : 'hiden'}>
                                <div className='block_seach_form'>
                                    <input></input>
                                </div>
                                <div className='block_search_icon'>
                                    <div className='block_search_icon-btn'>
                                        <span className='search_title'>SEARCH</span>
                                        {/* <a href='#' onClick={handlelsearchMain}><img  src={search} alt="" /></a> */}
                                    </div>

                                </div>



                            </div>
                            {/* ---- */}
                            <a href='#' className={togglesearch ? "hiden" : ''} onClick={handlelsearch}><img width="" src={search} alt="" /></a>
                        </li>
                        <li>
                            <a href='#' onClick={handlelogin}><img width="" src={person} alt="" /></a>
                        </li>
                        <li>
                            <a href='#' onClick={handlecart}><img width="" src={bag} alt="" /></a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* --------------------------- */}



            {/* ----------------------------- */}
            <div className={togglesig ? 'block_sign' : 'hiden'}>
                <div className="modal-content">
                    <form action="#">
                        <div className='modal-content_title'>
                            <span className='myaccount'>MY ACCOUNT</span>
                            <span className='myaccount-line'></span>

                            <span className="close" onClick={hanhdclickClose}>&times;</span>
                        </div>

                        <h2 style={{ paddingTop: '3vh' }}>MEMBERS PLEASE SIGN IN</h2>
                        <div className='form_sigin'>
                            <div className="fomrgroup">
                                <b>UserName:</b><br />
                                <input type="text" name="username" /><br />
                            </div>
                            <div className="fomrgroup">
                                <b>PassWord:</b><br />
                                <input type="passWord" name="passWord" /><br />
                            </div>
                            <div className="fomrgroup">
                                <button>Đăng nhập</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            <div className={togglecart ? 'block_cart' : 'hiden'}>
                <div className="modal-content">
                    <form action="#">
                        <div className='modal-content_title'>
                            <span className='myaccount'>YOUR ITEMS</span>
                            <span className='myaccount-line'></span>

                            <span className="close" onClick={handlecart}>&times;</span>
                        </div>

                        {/* <h2 style={{ paddingTop: '3vh'  }}>MEMBERS PLEASE SIGN IN</h2> */}
                        <div className='form_sigin'>
                           <div className='form_list_items'>
                                <div className='item_img'>
flkj    
                                </div>
                                <div className='item_name'>

                                Urban Twist Pump
                                </div>
                                <div className='item_cost'>
                                S$ 1,450.00
                                </div>
                           </div>
                           {/* <hr style={{padding:'3vh'}}/> 
                           */}
                           {/* <span className='form_sigin_line'>asdf</span> */}

                           <hr/>
                           <div className = 'sum_items'>
                               <div className='title_sum'>
                                    TOTAL
                               </div>
                               <span>:</span>
                               <div>

                               </div>
                                <div className='sum_cost'>
                                        0$
                                </div>
                           </div>
                            <div className="fomrgroup">

                                <button>
Check Out Now</button>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}

export default Nav;
