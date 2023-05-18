import React from 'react'
import { banner } from '../../assets/data/data'

const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="posts">
                    {banner.map((item) => (
                        <div key={item.id} className="post">
                            <div className="content">
                                <div className="img">
                                    <img src={item.cover} alt="" />
                                </div>

                                <div className="text">
                                    <h2>
                                        {item.title1}
                                    </h2>

                                    <h2>
                                        {item.title2}
                                    </h2>
                                    
                                    <p>
                                        {item.desc}
                                    </p>

                                    <button className='button'>SHOP NOW</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Banner