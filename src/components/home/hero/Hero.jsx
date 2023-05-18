import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import SerachProduct from './SerachProduct'
import {products} from '../../assets/data/data'


const Hero = () => {

    const [inputValue, setInputValue] = useState("")

    const onSearch = (key) => {
        setInputValue(key);
    }

    return (
        <>
            <section className='hero'>
                <div className="container">
                    <h1>
                        <label htmlFor="">
                            Over <span>6,500</span>
                            Curated Desigin
                        </label> <br />

                        <label htmlFor="">
                             Resources, <span>Graphic & Website</span> Templates
                        </label>
                    </h1>
                    
                    <p>
                        High-quality Design Themes for personal or commercial use contains 6k+ items in 100 categories.
                    </p>

                    <div className="search">
                        <span>All Categories</span>
                        <hr />
                        <input 
                            type="text" 
                            placeholder='Search Products...' 
                            value={inputValue}
                            onChange= {(e) => setInputValue(e.target.value)}
                        />
                        
                        <button>
                            <BiSearch 
                                className='searchIcon heIcon'
                                onClick={() => onSearch(inputValue)}
                            />
                        </button>
                    </div>

                    <SerachProduct value = {inputValue} onSearch ={onSearch} product ={products} />

                    <p>Examples: Mockup, PSD, Theme Design, Image…</p>
                </div>
            </section>
        </>
    )
}

export default Hero