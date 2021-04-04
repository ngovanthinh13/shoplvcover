import React from 'react'
import { useState, useEffect } from 'react'
import Nav from '../Nav/Nav'
import Footer from "../Footer/Footer"
import "./Products.css"
import axios from 'axios';
function Products() {


  const [oder, setOder] = useState();

  const [price, setPrice] = useState();
  const [query, setQuery] = useState('redux');
  // https://60678eaf98f405001728ef55.mockapi.io/api/v1/product/

  const [posts, setPosts] = useState([])
  const getPosts = async () => {
    try {
      const userPosts = await axios.get("https://60678eaf98f405001728ef55.mockapi.io/api/v1/product/")

      setPosts(userPosts.data);  // set State

    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {

    getPosts()
  }, [])  // includes empty dependency array

  const oderTheProduct= (e) =>{
    e.preventDefault();
    // e.Defaultvalue();
    console.log("I'm always called");
    // console.log(e.target.value, e.target.name)
    setOder(e.target.name)
    setPrice(e.target.value)
    alert(oder , price)
    
    // console.log(oder, price);
    // console.log(oder)
  }
  return (
    <div>
      <Nav />
      <div className='content'>products
                </div>
      <ul className="caption-style-1">

        {/* {posts.map(post=>(
         <li key={post.id}>{post.image}</li>
       ))} */}
        {posts.map(post => (
          <li key={post.id}>
            <img  src={post.image} alt={post.name} />
            <div className="caption">
              <div className="blur"></div>
              <div className="caption-text">
                <h1>{post.count}đ</h1>
                <p>{post.name}</p>
                <button name={post.name} value={post.count} className='btn_oder' onClick={
                
                   oderTheProduct
                 
                  }
                ><span>Đặt hàng</span></button>
              </div>
            </div>
          </li>
        ))

        }

      </ul>
      <Footer />
    </div>
  )
}

export default Products
