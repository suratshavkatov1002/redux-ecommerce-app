import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.svg'
import cartimg from "../assets/images/cart.png"
import { BiSearch } from 'react-icons/bi'
import { BsBagCheck } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { RiUser3Line } from 'react-icons/ri'
import { navlist } from '../assets/data/data'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { daleteProduct } from '../../redux/action/action'



const Header = () => {

   const [cartList, setCartList] = useState(false)
   const handleClose = () => {
      setCartList(null)
   }

   const handleCloses = () => {
      setCartList(null)
   }

   window.addEventListener("scroll", function () {
      const header = this.document.querySelector('.header')
      header.classList.toggle("active", this.window.scrollY > 100)
   })

   const [mobile, setMobile] = useState(false)

   const products = useSelector(state => state.ProductReducer.products)
   console.log(products);

   const dispatch = useDispatch()

   const deleteItem = (id) => {
      dispatch(daleteProduct(id));
   }

   const [price, setPrice] = useState(0)

   const totlPrice = () => {
      let price = 0;
      products.map((e) =>{
         price = ( e.price * e.qty) + price
      })
      setPrice(price)
   }

   useEffect(() => {
      totlPrice()
   }, [totlPrice])

   return (
      <>
         <header className='header'>
            <div className="container">
               <nav>
                  <div className="toggle">
                     <button onClick={() => setMobile(!mobile)}>
                        {mobile ? <AiOutlineClose className='close heIcon' /> : <AiOutlineMenu className='open  heIcon' />}
                     </button>
                  </div>

                  <div className="left">
                     <img src={logo} alt="" />
                  </div>

                  <div className="center">
                     <ul className={mobile ? "mobile-nav" : "menu"}>
                        {
                           navlist.map((nav) => (
                              <li key={nav.id}>
                                 <Link to={nav.path}>{nav.text}</Link>
                              </li>
                           ))
                        }
                     </ul>
                  </div>
               </nav>

               <div className="right">
                  <div className="right_search">
                     <input type="text" placeholder="Search Products..." />
                     <BiSearch className='searchIcon heIcon' />
                  </div>

                  <div className="right_user">
                     <RiUser3Line className='userIcon heIcon' />
                     <AiOutlineHeart className='userIcon heIcon' />
                  </div>

                  <div className='right_card'>
                     <button className='button' onClick={() => setCartList(!cartList)}>
                        <BsBagCheck className='shop heIcon' />
                        MY CART<span> ({products.length})</span>
                     </button>
                    
                     <div className={cartList ? "showCart" : "hideCart"}>
                        {products.length ? (
                           <section className='details'>
                              <div className='details_title'>
                                 <h3>Photo</h3>
                                 <p>Product Name</p>
                              </div>
                              
                              {products.map((e) => (
                                 <div className='details_content'>
                                    <div className='details_content_img'>
                                       <Link to={`/cart/${e.id}`} onClick={handleCloses}>
                                          <img src={e.cover} alt='' />
                                       </Link>
                                    </div>
                                    <div className='details_content_detail'>
                                       <div className='details_content_detail_price'>
                                          <p>{e.title}...</p>
                                          <p>Price : ${e.price}</p>
                                          <p>Quantity : {e.qty}</p>
                                       </div>
                                    </div>
                                    <div className='details_content_detail_icon' onClick={() => deleteItem(e.id)} >
                                       <i >
                                          <AiOutlineDelete />
                                       </i>
                                    </div>
                                 </div>
                              ))}

                              <div className='details_total'>
                                 <h4>Total : $ {price}</h4>
                              </div>
                           </section>
                        ) : (
                           <div className='empty'>
                              <p>Your cart is empty</p>
                              <img src={cartimg} alt='' />
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </header>
      </>
   )
}

export default Header