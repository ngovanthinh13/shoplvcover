// import './img'

import './Footer.css';
import vietnamicon from '../Header/img/vietnam_icon.png'


// import search from './img/search.svg'


function Footer() {
    return (
        <div className="footer">
            <div className='logo_footer'>
                {/* <h1>Tho Tran</h1> */}
                {/* <hr style={{border:'border: 1px solid #636e72;'}} /> */}
                <div className='footer_menu'>
                    <ul className='footer_menu_left'>
                        <li className='footer_menu_itemt1'>
                        <div className='icon_footer'>
                                {/* <div className='icon_footer_img'><img width="" src={vietnamicon} alt="" /></div> */}
                                <div className='icon_footer_name'>
                                    <div><span style={{fontSize:'0.78125vw'}}>Join the Conversation</span></div>
                                    <div className ='icon_footer_input'>
                                        <input placeholder='EMAIL ADDRESS'>
                                            {/* <div> */}
                                            {/* <span>&rarr;</span> */}
                                            {/* </div> */}
                                        </input>
                                        <div className='icon_email'>&rarr;</div>
                                    </div>
                                </div>
                            </div>
                            {/* <p>ahihi</p> */}
                            {/* <input>Send email</input> */}
                        </li>
                    </ul>
                    <ul className='footer_menu_right'>
                        <li className='footer_menu_itemt1'>
                            <div className='icon_footer'>
                                {/* <div className='icon_footer_img'><img width="" src={vietnamicon} alt="" /></div> */}
                                <div className='icon_footer_name'> &nbsp;Vietnam</div>
                            </div>

                            {/* */}

                        </li>

                        <li className='footer_menu_itemt3'>
                            Contact
                        </li>
                        <li className='footer_menu_itemt5'>
                            Follow Us
                        </li>
                        <li className='footer_menu_itemt6'>
                            Legal & Privacy
                        </li>
                        <li className='footer_menu_itemt7'>
                            Careers
                        </li>
                        <li className='footer_menu_itemt8'>
                            Sitemap
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Footer;
