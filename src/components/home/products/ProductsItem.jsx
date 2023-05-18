import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineHeart } from 'react-icons/ai';
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../redux/action/action';


const ProductsItem = ({ data }) => {
   

   const [img, setImg] = useState("")
  
   const [openImg, setOpenImg] = useState(false)
   
   const onOpenImg = (src) => {
      setImg(src)
      setOpenImg(true)
   }

   
   const dispatch = useDispatch()
  

   const heandleSHop = (product) => {
      dispatch(addProduct(product));
   }

   return (
      <>
         <div className='product_items'>
            {data.map((items) => (
               <div className='box' key={items.id}>
                  <div className='img'>     
                     <img src={items.cover} alt='' />
                     
                     <div className='overlay'>
                        <button className='button' onClick={() => heandleSHop(items)} >
                           <FiShoppingBag/>
                        </button>

                        <button className='button'>
                           <AiOutlineHeart/>
                        </button>

                        <button className='button' onClick={() => onOpenImg(items.cover)}>
                           <FiSearch/>
                        </button>
                     </div>
                  </div>
                  
                  <div className='details'>
                     <h3>{items.title}</h3>
                     <p>{items.author}</p>
                     <h4>${items.price}</h4>
                  </div>
               </div>
            ))}
         </div>

         <div className={openImg ? 'modelOpen' : "modelClose "}>
            <div className="onClickImage">
               <img src={img} alt="" />
               <button className='button' >
                  <AiOutlineClose onClick={() => setOpenImg(false)} />
               </button>
            </div>
         </div>
      </>
   )
}

export default ProductsItem