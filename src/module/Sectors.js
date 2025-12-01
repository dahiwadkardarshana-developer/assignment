// Filename - App.js

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import'../style/Sectors.css';
import Indipe from "./Indipe";
import Indiconnect from "./Indiconnect";
import Indinxt from "./Indinxt";
import Sec2Pay from "./Sec2Pay";
import Indikendra from "./Indikendra";
import IndiSpeed from "./IndiSpeed";

function App() {
    return (
        <>
        <section   className="sectors-section py-5">

                    <div   data-aos="fade-up" data-aos-delay="400"class="image-container" >
                        <img src="./assets/download9.svg"alt="portfolio"></img>
                       <div class="image-text">Our Portfolio</div> 
                    </div>
                    <div  className="portfolio-text py-4">
                         <h3 data-aos="fade-up" data-aos-delay="500"><span className="orange">Integrated,</span> <span className="blue">Inclusive</span><span className="orange2">& Innovative</span></h3>
            <p data-aos="fade-up" data-aos-delay="600">Equipping diverse brands in multiple sectors with essential resources, expertise, and unwavering support</p>
                    </div>
           


            <Tabs data-aos="fade-up" data-aos-delay="700">
                <TabList style={{
                    fontSize: '20px',
                    margin: '20px',
                    color: "#1616b7",
                    borderRadius: '10px',
                }}>
                    <Tab  style={{ background: '#0252D4', 
                        borderRadius: '5px', marginRight:' 20px', color:'#fff'}}>Payments</Tab>
                    <Tab  style={{ marginRight:' 20px',background: '#0252D4', 
                        borderRadius: '5px',color:'#fff' }}>Financial Services</Tab>
                    <Tab  style={{ marginRight:' 20px',background: '#0252D4', 
                        borderRadius: '5px',color:'#fff' }}>ONDC Logistics</Tab>
                </TabList>

                <section className="first-tab">
                    <div className="container first-tab-container">
                <TabPanel  style={{ fontSize: '20px'}}>
                    <Tabs  className="pt-4"defaultIndex={0}>
                        <TabList  data-aos="fade-up" data-aos-delay="1400" style={{textAlign:"left"}}>
                            <Tab style={{ marginRight:' 20px', background: '#01295C', 
                                borderRadius: '5px',border:'1px solid #01295C', color:'#fff'}}>Indipe</Tab>
                            <Tab style={{ marginRight:' 20px',background: 'transperent', 
                                borderRadius: '5px',border:'1px solid #01295C',color:'#01295C' }}>Indiconnect</Tab>
                            <Tab style={{ marginRight:' 20px',background: 'transperent', 
                                borderRadius: '5px',border:'1px solid #01295C',color:'#01295C' }}>IndiNXT</Tab>
                        </TabList>
                        <TabPanel>

                           <Indipe/>

                        </TabPanel>
                        <TabPanel>
                            <Indiconnect/>

                        </TabPanel>
                        <TabPanel>
                           <Indinxt/>

                        </TabPanel>
                    </Tabs>
                </TabPanel>
                </div>
                </section>



 
                    <div className="container first-tab-container">
                <TabPanel   style={{ fontSize: '20px', 
                    margin: '20px' }}>
                    <Tabs className="pt-4">
                        <TabList style={{textAlign:"left"}}>
                            <Tab style={{ marginRight:' 20px',background: '#01295C', 
                                borderRadius: '5px',border:'1px solid #01295C',color:'#fff' }}>Sec2Pay</Tab>
                            <Tab style={{ marginRight:' 20px',background: 'transperent', 
                                borderRadius: '5px', border:'1px solid #01295C',color:'#01295C' }}>Indikendra</Tab>
                            
                        </TabList>
                        <TabPanel>
                           <Sec2Pay />

                        </TabPanel>
                        <TabPanel>
                            <Indikendra />

                        </TabPanel>
                       
                    </Tabs>
                </TabPanel>
                </div>
               


              
                    <div className="container first-tab-container">
                <TabPanel  style={{ fontSize: '20px', margin: '20px' }}>
                    <Tabs className="pt-4">
                        <TabList style={{textAlign:"left"}}>
                            <Tab style={{ marginRight:' 20px',background: '#01295C', 
                                borderRadius: '5px',border:'1px solid #01295C',color:'#fff' }}>IndiSpeed</Tab>
                            
                        </TabList>
                        <TabPanel>
                           <IndiSpeed/>

                        </TabPanel>
                       
                    </Tabs>
                </TabPanel>
                </div>
                
            </Tabs>

            </section>
        </>
    );
}

export default App;