export function formatDate(date){
    const update = new Date(date)
    const now = new Date()
    const diffMs = now-update
    const diffSec = Math.floor(diffMs/1000)
    const diffMin = Math.floor(diffSec/60)
    const diffHours = Math.floor(diffMin/60)
    const diffDay = Math.floor(diffHours/24)
    const diffMonths = Math.floor(diffDay/30)
    const diffYears = Math.floor(diffDay/365)
    if(diffSec<60)  return 'updated just now';
    if(diffMin<60) return `updated ${diffMin} minute${diffMin !== 1 ? 's' : ''} ago`;
    if(diffHours<24) return `updated ${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    if(diffDay<30) return `updated ${diffDay} day${diffDay !== 1 ? 's' : ''} ago`
    if(diffMonths<12) return `updated ${diffMonths} month${diffMonths !== 1 ? 's' : ''} ago`;
    return `updated ${diffYears} year${diffYears !== 1 ? 's' : ''} ago`;
}