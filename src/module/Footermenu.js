import React from 'react'
import '../style/Footermenu.css'

const footermenu = () => {
  return (
    <div>
      
      <section className='menu-section py-5'>
        <div className='menu-container container d-flex'>
            <div data-aos="fade-left" data-aos-delay="500"className='footer-1'>
                 <img src="./assets/Logo2.svg"alt="logo"  style={{ height: "80px" }}></img>
                 <h5>
                  Building <span>Ventures,</span> Building <span>Nation.</span>
                 </h5>
                 <p>
                  A venture builder empowering mission-driven founders with resources, functional expertise and strategic partnerships to
dream, build, and grow.
                 </p>
                 <div className='socia-media-icon'>
                  <p>Connect with us:</p>
                  <span className='soc-med'>
                    <img src="./assets/linkdin.svg"alt="logo"  style={{ height: "20px",filter: "invert(100%)" }}></img>
                    <img src="./assets/twitter.svg"alt="logo"  style={{ height: "20px",filter: "invert(100%)" }}></img>
                    <img src="./assets/facebook.svg"alt="logo"  style={{ height: "20px",filter: "invert(100%)" }}></img>
                    <img src="./assets/insta.svg"alt="logo"  style={{ height: "20px",filter: "invert(100%)" }}></img>
                  </span>
                 </div>
            </div>
            <div data-aos="fade-right" data-aos-delay="500"className='footer-2'>
              <h6>
                Home
              </h6>
              <ul>
              <li>About inCORE</li>
              <li>Contact Us</li>
              <li>About IndiFly</li> 
              </ul>
             
            </div>
            <div data-aos="fade-right" data-aos-delay="500" className='footer-3'>
               <h6>
               inCore
              </h6>
              <ul>
              <li>inSurge (Marketing & Growth)</li>
              <li>inStack (Tech & Product)</li>
              <li>inVolve (HR & Culture)</li> 
              <li>inSure (Legal & Compliance)</li>
              </ul>
            </div>

            <div   data-aos="fade-right" data-aos-delay="500"className='footer-4'>
               <h6>
               Quick links
              </h6>
              <ul>
              <li>Blogs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li> 
              <li>Career</li>
              </ul>
            </div>
        </div>
        
      </section>
    </div>
  )
}

export default footermenu
