import React from 'react';
import './ProfileSide.css';
import LogoSearch from '../logosearch/LogoSearch';
import ProfileCard from '../profileCard/ProfileCard';
import FollowersCard from '../followersCard/FollowersCard';

const ProfileSide = () => {
    return (
        <div className="ProfileSide">
            <LogoSearch />
            <ProfileCard />
            <FollowersCard />
        </div>
    )
}

export default ProfileSide