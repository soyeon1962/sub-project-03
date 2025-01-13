import React from 'react'

const Profile = () => {
  return (
    <div className='profile journalLayout'>
      <h1>프로필</h1>
      <div className='profileCard'>
        <div className='profileHeader'>
          <div className='profilePic'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8J-mb1xvQ1iUtI2KuGEcNPw8NFe94WVZH8w&s" alt="" />
          </div>
          <div className='profileInfo'>
            <h2>신짱구</h2>
            <h3>@zzang</h3>
            <h3>zzang@example.com</h3>
          </div>
        </div>
        <div className='profileSettings'>

        </div>
      </div>
    </div>
  )
}

export default Profile