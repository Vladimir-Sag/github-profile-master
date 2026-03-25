import { useEffect, useState } from "react"
import ShowNesting from './assets/images/Nesting.svg'
import ShowStar from './assets/images/Star.svg'
import ShowChield from './assets/images/Chield_alt.svg'
import {formatDate} from './assets/utilits/formatDate'

export default function ShowRepositories({url}){
    const [result,setResult] = useState([])
    const [showAll,setShowAll] = useState(false);
    const showResult = showAll?result:result.slice(0,4)
    useEffect(()=>{
        setShowAll(false)
        setResult([])
    },[url])
    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal
        if(!url) return;
        async function fetchData() {
            try{
                const res = await fetch(url,{signal});
                const data = await res.json()
                setResult(data)
            }catch(err){
                if(err.name!=='AbortError') console.error(err.message)
            }
        }
        fetchData()
        return()=>controller.abort()
    },[url])
    return(
        <div className="repo-cards">
            {showResult.map(item=>(
                <div key={item.id} className="repo-card">
                    <h3 className="repo-title">{item.name}</h3>
                    <p className="repo-description">{item.description}</p>
                    <div className="repo-properties">
                        <div className="repo-left">
                            {item.license&&(
                                <>
                                    <span><img src={ShowChield} alt="" /></span>
                                    <span className="repo-numbers repo-license">{item.license.spdx_id}</span>
                                </>
                            )}
                            <span><img src={ShowNesting} alt="" /></span>
                            <span className="repo-numbers">{item.forks?.toLocaleString('en-US')}</span>
                            <span><img src={ShowStar} alt="" /></span>
                            <span className="repo-numbers">{item.stargazers_count}</span>
                        </div>
                        <div className="repo-right">
                            <p className="repo-update">{formatDate(item.updated_at)}</p>
                        </div>
                    </div>
                </div>
            ))}
            <button 
                type="button" className="repo-button"
                onClick={()=>setShowAll(true)}
                disabled={showAll|| result.length<=4}
            >View all repositories</button>
        </div>
    )
}