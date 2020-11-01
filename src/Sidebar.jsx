import React from 'react'
import Channel from './Channel'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <h5>FOLLOWED CHANNELS</h5>
                <Channel avatar='./logo.png' name='cleverprogrammer' followers='820k' />
                <Channel avatar='./logo.png' name='Pinnyboy' followers='200k' />
                <Channel avatar='./logo.png' name='Davidrakosi' followers='1352' />
                <h5>RECOMMENDED CHANNELS</h5>
                <p className='sidebar__topShowMore'>Show More</p>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__bottomContainer">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder='Search to add friends' />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
