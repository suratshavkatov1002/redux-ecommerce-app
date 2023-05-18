import React, { useState } from 'react'
import {  AiOutlineHeart } from 'react-icons/ai';
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const SerachProduct = ({ product, value }) => {
    const [img, setImg] = useState("")

    const [openImg, setOpenImg] = useState(false)
    const onOpenImg = (src) => {
        setImg(src)
        setOpenImg(true)
     }
   
    return (
        <>
            <section className='searchItem' >
                <div className='product_items'>
                    {product.filter((items) => {
                        const searchKey = value.toLowerCase()
                        const title = items.title.toLowerCase()

                        return searchKey && title.startsWith(searchKey) && title !== searchKey
                    }).slice(0, 10).map((items) => (
                        <div className='box' key={items.id}>
                            <div className='img'>
                                <img src={items.cover} alt='' />

                                <div className='overlay'>
                                    <button className='button'>
                                        <FiShoppingBag />
                                    </button>

                                    <button className='button'>
                                        <AiOutlineHeart />
                                    </button>

                                    <button className='button' onClick={() => onOpenImg(items.cover)}>
                                        <FiSearch />
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
            </section>
        </>
    )
}

export default SerachProduct