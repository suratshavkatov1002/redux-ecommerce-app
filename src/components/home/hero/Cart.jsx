import React from 'react'
import { hero } from '../../assets/data/data'

const Cart = () => {
  return (
    <>
        <section className='cards' >
            {hero.map((item) => (
                <div key={item.id} className="card">
                    <div className="left">
                        <img src={item.cover} alt="" />
                    </div>

                    <div className="right">
                        <h4>{item.name}</h4>
                        <p>{item.items} items</p>
                    </div>
                </div>
            ))}
        </section>
    </>
  )
}

export default Cart