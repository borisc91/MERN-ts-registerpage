import React from 'react'
import classes from './Main.module.css'


function Main(props: any) {

 
    

    const name = localStorage.getItem("token") || '{}';

    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }
    
    
  return (
    <div className={classes.main_container}>
        <nav className={classes.navbar}>
            <h1>Welcome  {name} </h1>
            <button className={classes.white_btn} onClick={handleLogout}>
                Logout
            </button>
        </nav>
    </div>
  )
}

export default Main