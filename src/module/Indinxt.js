import React from 'react'
import'../style/Indipe.css';

const Indinxt = () => {
  return (
    <div>
      <div>
      <section className='indi-section pt-3'>
        <div className='indi-container container d-flex '>
            <div  data-aos="fade-right" data-aos-delay="400"className='indi-text'>
                    <h6>Wealth tech</h6>
                    <h5>Seamless wealth creation and digital payments for all.</h5>
                    <p>Empowering individuals and partners with secure, user-friendly financial tools. From UPI transactions to personalized wealth management, 
                        we make financial growth accessible to everyone.</p>
                        <ul>
                            <li>
                                User-friendly mutual fund investments
                            </li>
                            <li>Secure UPI transactions</li>
                            <li>Seamless digital gold investments</li>
                            <li>Advanced portfolio tracking tools</li>
                            <li>Partner program for mutual fund distribution</li>
                        </ul>

                            <div className='pt-4'>
                        <button className='custombtn1 '>
                            Install the App
                        </button>
                        <button className='custombtn2 '>
                           
                           Explore More <span><img src="./assets/SVGG.png"alt="incore"  style={{ height: "100%" }}/></span>
                        </button>
                        </div>

            </div>
            <div  data-aos="fade-left" data-aos-delay="600"className='indi-img'>
                     <img src="./assets/Indinxt.webp" 
      alt="incore" />
      
            </div>
        </div>

      </section>
    </div>
    </div>
  )
}

export default Indinxt
