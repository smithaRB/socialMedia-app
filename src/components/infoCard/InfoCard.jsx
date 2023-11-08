import React, { useState } from 'react';
import './InfoCard.css';
import { UilPen } from '@iconscout/react-unicons';
import ProfileModel from '../profileModel/ProfileModel';

const InfoCard = () => {

    const [modelOpened, setModelOpened] = useState(false);
    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Your Info</h4>
                <div>
                    <UilPen width='2rem' height='1.2rem' onClick={() => setModelOpened(true)} />
                    <ProfileModel modelOpened={modelOpened} setModelOpened={setModelOpened} />

                </div>
            </div>

            <div className="info">
                <span><b>Status </b></span>
                <span>in Relationship</span>
            </div>

            <div className="info">
                <span><b>Lives in </b></span>
                <span>Multan</span>
            </div>

            <div className="info">
                <span><b>Works at </b></span>
                <span>Zainkeepscode inst</span>
            </div>

            <button className='button logout-button'>Logout</button>
        </div>
    )
}

export default InfoCard