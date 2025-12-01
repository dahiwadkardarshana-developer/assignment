import React from 'react'
import '../style/Ventures.css'



const Ventures = () => {
  return (
    <div>
   
      <section  className='ventur-section   py-5'>
 
        
        <div  className='container  venture-part1  ' >
          
            <div data-aos="fade-left"   className=' venture venture-text '>
               
                 <h6>OUR</h6>
               <h2>Ventures</h2>
                <p>Empowering individuals with secure, user-friendly financial tools.</p>
              <button className='custombtn3 '>
                           
                           Know More <span><img src="./assets/SVG.png"alt="incore"  style={{ height: "100%" }}/></span>
                        </button>
              
            <span className='venture-img'><img src='./assets/venturman.svg' alt="incore" /></span>
            
          
            </div>
            
          

              <div data-aos="fade-right" className='venture-part2'>
            <div className='venture1'>
               <img src="./assets/inCore.svg" 
      alt="incore"  style={{ height: "40px" }}/>
            </div>
            <div className='venture2'>
               <img src="./assets/INDsights.svg" 
      alt="indcore"  style={{ height: "40px" }}/>
            </div>
            <div className='venture3'>
               <h4>Become our Partner</h4>
            </div>
            <div className='venture4'>
                <h4>Become our Partner</h4>
            </div>
            </div>  
</div>
            
            


        

      </section>
      </div>
  
  )
}

export default Ventures
