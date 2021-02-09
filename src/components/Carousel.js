import { extend } from 'jquery'
import React, { Component } from 'react'
import Link from 'react-router-dom'
import '../Carousel.css'
import Carousel from 'react-bootstrap/Carousel' 



export default class CarouselBootrap extends Component{
    render() {  
        return (  
                <div>  
                
                 <div className='' >  
                 <Carousel>  
                 <Carousel.Item style={{'height':"500px"}} >  
                 <img style={{'height':"500px"}}  
                 className="d-block w-100"  
                  src={'01.jpg'}  />  
                   <Carousel.Caption>  
                     <h3>First Demo </h3>  
                         </Carousel.Caption>  
                         </Carousel.Item  >  
                         <Carousel.Item style={{'height':"500px"}}>  
                         <img style={{'height':"500px"}}  
                           className="d-block w-100"  
                            src={'02.jpg'}    />  
                               <Carousel.Caption>  
                           <h3>Second Demo</h3>  
                              </Carousel.Caption>  
                                </Carousel.Item>  
                               <Carousel.Item style={{'height':"500px"}}>  
                               <img style={{'height':"500px"}}  
                                className="d-block w-100"  
                                 src={'bg.jpg'}   />  
                                <Carousel.Caption>  
                                 <h3>Third Demo</h3>  
                                  </Carousel.Caption>  
                                 </Carousel.Item>  
                                </Carousel>  
                        </div>  
                </div>  
        )  
    }  
}  
    


