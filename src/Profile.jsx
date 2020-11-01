import React from 'react'
import './Profile.css'
import RecentItem from './RecentItem'
const Profile = () => {
    return (
        <div className='Profile'>
            <div className="profile__topLeft">
                <img src="./logo.png" alt="" />
                <div className="profile__topLeftDetails">
                    <h1>cleverprogrammer</h1>
                    <h3>830k followers</h3>
                </div>
            </div>
            <div className="profile__topRight">
                <i class="fas fa-heart graybg"></i>
                <i class="fas fa-bell graybg"></i>
                <i class="fas fa-ellipsis-v"></i>
            </div>
            <div className="profile__menu">
                <h2 className='active'>Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2><i class="fas fa-arrow-up"></i></h2>
                <h2>Chat</h2>
            </div>
            <div className="profile__recent">
                <h2>Recent Broadcast</h2>
                <div className="profile__recentItems">
                    <RecentItem
                        url={'https://www.youtube.com/watch?v=828iN0KGRgg'}
                        title={'This FASCINATING Jax Play is Briliant To Watch... | Funny LoL Series #667'}
                    />
                    <RecentItem
                        url={'https://www.youtube.com/watch?v=828iN0KGRgg'}
                        title={'This FASCINATING Jax Play is Briliant To Watch... | Funny LoL Series #667'}
                    />
                    <RecentItem
                        url={'https://www.youtube.com/watch?v=828iN0KGRgg'}
                        title={'This FASCINATING Jax Play is Briliant To Watch... | Funny LoL Series #667'}
                    />
                </div>
                <div className="profile__categories">
                    <h2>recently streamed categories</h2>
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-144x192.jpg" alt="" />
                    <h3>Gaming</h3>
                </div>
            </div>
        </div>
    )
}

export default Profile
