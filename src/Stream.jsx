import React from 'react'
import './Stream.css'

function Stream() {
    return (
        <div className='stream'>
            <div className="stream__container">
                <div className="stream__status">
                    <div className="stream__statusCcontainer">
                        <div className="stream__statusContainerTop">
                            <div className="stream__statusIndicator">OFFLINE</div>
                            <h2>check out the below streams</h2>
                        </div>
                        <div className="stream__statusInfo">
                            <i class="fas fa-bell"></i>
                            <p>you will be notified</p>
                        </div>
                    </div>
                </div>
                <div className="stream__videoEmbeded">
                    <iframe
                        src="https://player.twitch.tv/?channel=tfue&parent=www.example.com"
                        frameborder="0"
                        allowfullscreen="true"
                        scrolling="no"
                        height="295"
                        width="500">
                    </iframe>

                </div>
            </div>

        </div>
    )
}

export default Stream
