const url = 'https://api.github.com'
import { useEffect, useState } from 'react';
import searchIcon from './assets/images/Search.svg';
export default function SearchBar({onUserFound,onError}){
    const [searchInp,setSearchInp] = useState('');
    const [userName,setUserName] = useState('')

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal
        async function fetchData() {
            if(!userName.trim()) return;
            try{
                const res = await fetch(`${url}/users/${userName}`,{signal})
                if(!res.ok) {
                    onError(true)
                    return;
                }
                const data = await res.json()
                onUserFound(data)
                onError(false)
            }catch(error){
                if(error.name!=='AbortError'){
                    onError(true)
                }
            }
        }
        fetchData()
        return()=>controller.abort()
    },[userName])
    function handleSetName(){
        setUserName(searchInp)
        setSearchInp('')
    }
    return(
        <section className='search-bar'>
            <div className='search-container'>
                <button type='button' className='search-bar-button' onClick={handleSetName}>
                    <img src={searchIcon} alt="Search" width={24} />
                </button>
                <input type="text" value={searchInp} onChange={(e)=>setSearchInp(e.target.value)} 
                    className='search-bar-input' placeholder='username'
                    onKeyDown={(e)=>e.key==='Enter'&&handleSetName()}
                />
            </div>
        </section>
        
    )
}