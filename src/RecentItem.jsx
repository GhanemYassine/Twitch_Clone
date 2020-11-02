import React from 'react'
import './RecentItem.css'
const RecentItem = ({ url, title }) => {
    return (
        <div className='item'>
            <iframe
                width="400"
                height="300"
                src={url}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div className="item__details">
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-144x192.jpg" alt="" />
                <div className="item__detailsText">
                    <h4>{title}</h4>
                    <p>cleverprogrammer</p>
                    <p>Science & Technology</p>
                </div>
            </div>
        </div>
    )
}

export default RecentItem
