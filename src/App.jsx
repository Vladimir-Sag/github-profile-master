import { useState } from 'react';
import './App.css'

import SearchBar from './SearchBar';
import ProfileContainer from './ProfileContainer';
import ShowRepositories from './ShowRepositories';

function App() {
  const [profile,setProfile] = useState(null)
  const [notFound,setNotFound] = useState(false);
  return (
    <main>
      <SearchBar onUserFound = {setProfile} onError={setNotFound}/>
      {!notFound&&profile&&(
        <>
          <section className='profile-user'>
            <figure className='profile-img-container'>
              <img src={profile.avatar_url} alt={profile.login}  className='profile-avatar'/>
            </figure>
            
            <div className='profile-info'>
              <ProfileContainer text='Followers' description={profile.followers}/>
              <ProfileContainer text='Following' description={profile.following}/>
              <ProfileContainer text='Location' description={profile.location}/>               
            </div>
            <div className='profile-name-bio'>
              <h2 className='profile-name'>{profile.name||profile.login}</h2>
              <p className='profile-bio'>{profile.bio}</p>
            </div>
          </section>
          <section className='repo-section'>
            <ShowRepositories url={profile.repos_url}/>
          </section>
      </>
      )}
      {notFound&&
      <div className='error-message'>User not found</div>}
    </main>
      
  )
}

export default App
