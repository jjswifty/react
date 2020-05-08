import React from 'react';
import s from './ProfileInfo.module.css';


const Profile = () => {
  return (
    <div >
      <div>
        <img className={s.imgMain} src="https://club.olympus.com.ru/image/2080/topic/2017/07/17/2cb35cd7d2.jpg" alt="bruh" />
      </div>
      <div className={s.descriptionBlock}>
        ava + desc
      </div>
    </div>
  );
}

export default Profile;