import React, { Component } from 'react'
import Link from 'react-router-dom'
import '../Topbar.css'


export default class Topbar extends Component{
    render(){
        return(
            <div className='container topbarContainer'>
                <div className='row'>
                    <div className='col-12 col-sm-4'>
                        <img src='logo.png' /> 
                    </div>

                    <div className='col-12 col-sm-4 '>
                        
                    </div>
                    <div className='d-none d-sm-block d-sm-none d-md-block schoolLogo'>
                        <img src='school.png' /> 
                    </div>
                </div>
                     
            </div>
        )
    }
}