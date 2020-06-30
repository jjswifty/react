import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    
    
    return (
        <div className={s.profileInfo}>
            
            <img
                className={s.imgMain}
                src="https://club.olympus.com.ru/image/2080/topic/2017/07/17/2cb35cd7d2.jpg"
                alt="bruh"/>
            <div className={s.descriptionBlock}>
                <img src = {props.profile.photos.large} alt=''/>
                <div>
                    <span className = {s.contacts}>
                        {
                            Object.entries({...props.profile.contacts})
                            .map(e => <span className = {s.contact}> {e + ''} </span>)
                        }
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;