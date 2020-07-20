import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileInfoStatus from './ProfileInfoStatus/ProfileInfoStatus';

class ProfileInfo extends React.Component {

    render () {
        return (
            <div className={s.profileInfo}>
    
                {
                /*<img
                    className={s.imgMain}
                    src="https://club.olympus.com.ru/image/2080/topic/2017/07/17/2cb35cd7d2.jpg"
                alt="bruh"/>*/
                }
                
                <div className={s.descriptionBlock}>
                    <img src = {this.props.profile.photos.large} alt=''/>
                    <ProfileInfoStatus profileStatus = {this.props.profileStatus}/>
                    <div>
                        <span className = {s.contacts}>
                            {
                                Object.entries({...this.props.profile.contacts})
                                .map(e => <span className = {s.contact} > {e + ''} </span>)
                            }
                        </span>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default ProfileInfo;