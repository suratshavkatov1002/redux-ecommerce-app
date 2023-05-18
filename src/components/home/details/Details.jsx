import React, { useEffect, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { MdStarRate } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { addProduct, daleteProduct, removeInt } from '../../../redux/action/action'

const Details = () => {

   const { id } = useParams()

   const [data, setData] = useState([])

   const products = useSelector(state => state.ProductReducer.products)

   const details = () => {
      const detailsData = products.filter((item) => {
         return item.id == id
      })

      setData(detailsData)
   }

   useEffect(() => {
      details()
   }, [id])

   const navigate = useNavigate()

   const dispatch = useDispatch()

   const addProducts = (item) => {
      dispatch(addProduct(item))
   }

   const decrement =(item) => {
      dispatch(removeInt(item))
   }

   const deletes  = (id) => {
      dispatch(daleteProduct(id))
      navigate('/')
   }
   

   return (
      <>
         <article>
            <section className='details'>
               <h2 className='details_title'>Product Details Pages</h2>
               
               {data.map((item) => (
                  <div className='details_content'>
                     <div className='details_content_img'>
                        <img src={item.cover} alt='' />
                     </div>
                     
                     <div className='details_content_detail'>
                        <h1>{item.title}</h1>
                        
                        <div className='rating'>
                           <MdStarRate />
                           <MdStarRate />
                           <MdStarRate />
                           <MdStarRate />
                           <MdStarRate />
                           <label htmlFor=''>(1 customer review)</label>
                        </div>
                        
                        <h3> ${item.price * item.qty}</h3>
                        
                        <p>{item.author}</p>
                        
                        <div className='qty'>
                           
                           <div className='count'>
                              <button  onClick={() => addProducts(item)} >
                                 <AiOutlinePlus />
                              </button>
                              
                              <span>{item.qty}</span>
                              
                              <button onClick={item.qty <= 1 ? () => deletes(item.id) : () => decrement(item)} >
                                 <AiOutlineMinus />
                              </button>
                           </div>
                           <button className='button'>Add To Cart</button>
                        </div>
                        
                        <div className='desc'>
                           <h4>PRODUCTS DESCRIPTION</h4>
                           
                           <p>Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs.</p>
                           <h4> PRODUCT DETAILS</h4>
                           
                           <ul>
                              <li>
                                 <p> Material: Plastic, Wood</p>
                              </li>
                              <li>
                                 <p>Legs: Lacquered oak and black painted oak</p>
                              </li>
                              <li>
                                 <p>Dimensions and Weight: Height: 80 cm, Weight: 5.3 kg</p>
                              </li>
                              <li>
                                 <p>Length: 48cm</p>
                              </li>
                              <li>
                                 <p>Depth: 52 cm</p>
                              </li>
                              <li>
                                 <p>Seat Height: 44 cm</p>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               ))}
            </section>
         </article>
      </>
   )
}

export default Details
