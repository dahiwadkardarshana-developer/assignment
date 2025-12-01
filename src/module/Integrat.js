import React from 'react'
import '../style/integrate.css'

const Integrat = () => {
  return (
    <div>
      <section className='integrat-section pb-5'>
        <div className='container integrat-container text-center'>
          <div   className='integrat-text py-3'>
          <h6  data-aos="fade-left" data-aos-delay="400">
              Integrated expertise, delivered at <span>every stage.</span>
          </h6>
          <p data-aos="fade-right" data-aos-delay="600">
              <b>We don’t just advise, we embed.</b><br/> With <b>inSTACK</b>, <b>inSURGE</b>, <b>inSURE</b>, and <b>inVOLVE</b> founders gain the muscle of execution alongside strategic leadership guidance.
          </p>
          </div>
       

        <div  data-aos="fade-up" data-aos-delay="800"className='integrate-img image-wrapper'>
          <img src="./assets/download8.svg" usemap="#sectionMap" alt="logo" className='img-fluid'></img>


          <a class="hotspot section1" href="https://link1.com"><span /></a>
          <a class="hotspot section2" href="https://link2.com"><span /></a>
          <a class="hotspot section3" href="https://link3.com"><span /></a>
          <a class="hotspot section4" href="https://link4.com"><span /></a>


        </div>

         </div>
      </section>
    </div>
  )
}

export default Integrat
