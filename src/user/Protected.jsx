import React, { useEffect } from 'react'

const Protected = () => {
    const ulogin=JSON.parse(sessionStorage.getItem('ulogin'));
    useEffect(()=>{
        if(ulogin){
            
        }
    })
  return (
    <div>Protected</div>
  )
}

export default Protected