import React from 'react'
import '../style/Mission.css'

const Mission = () => {
  return (
    <div>
      <section className='mission-section py-5'>
        <div   className='container mission-container '>
            <div   data-aos="fade-right" className='mission-text'>
                    <p>
                        We create platforms and ecosystems for <span className='first'>mission-driven founders</span>  that cultivate brands bringing about digital inclusion and transformative growth in the emerging regions of
<br/><span className='second'>Bharat.</span>
                    </p>
                    <p>
                        We are a venture builder co-creating alongside founders in their journey <span className='third'>from idea to industry
                            </span> and <span className='third'>beyond.</span>
                    </p>
            </div>
            <div  data-aos="fade-left" className='mission-img'>
                     <img src="./assets/india.svg" 
      alt="incore"  />
      
            </div>
        </div>

      </section>
    </div>
  )
}

export default Mission
