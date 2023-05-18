import React from 'react'
import Heading from '../../common/Heading'
import { price } from "../../assets/data/data"

const Price = () => {
    return (
        <>
            <section className='price' >
                <Heading
                    title="Choose The Plans"
                    desc="Choose The Plans Meet our newbies! The latest templates uploaded to the marketplace."
                />

                <div className='content'>
                    {price.map((item) => (
                        <div className='box' key={item.id}>
                            <h3>{item.name}</h3>
                            <h1>
                                <span>$</span>
                                {item.price}
                                <label htmlFor=''>/user per month</label>
                            </h1>
                            <p>{item.desc}</p>
                            <button className='button'>GET STATRED</button>

                            <ul>
                                {item.list.map((lists) => (
                                    <li>
                                        <i>{lists.icon}</i>
                                        <span>{lists.para}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Price