import React, { useState } from 'react';
import './RightSide.css';
import Home from '../../img/home.png';
import Noti from '../../img/noti.png';
import Comment from '../../img/comment.png';
import { UilSetting } from '@iconscout/react-unicons';
import TrendCard from '../trendCard/TrendCard';
import ShareModal from '../shareModal/ShareModal';

const RightSide = () => {
    const [modelOpened, setModelOpened] = useState(false);
    return (
        <div className="RightSide">
            <div className="navIcons">
                <img src={Home} alt="" />
                <UilSetting />
                <img src={Noti} alt="" />
                <img src={Comment} alt="" />
            </div>

            <TrendCard />

            <button className="button r-button" onClick={() => setModelOpened(true)} >
                Share
            </button>
            <ShareModal modelOpened={modelOpened} setModelOpened={setModelOpened} />
        </div>
    )
}

export default RightSide