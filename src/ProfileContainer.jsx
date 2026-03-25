export default function ProfileContainer({text,description}){
    return(
        <div className='profile-box'>
            <span className='profile-text'>{text}</span>
            <span className='profile-line'></span>
            <span className='profile-description'>{description}</span>
        </div>
    )
}