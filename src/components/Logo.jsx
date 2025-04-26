import React from 'react'
import './logo.css'
import { Link } from 'react-router';
function Logo() {
    const handleToggleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar');
    }
  return (
 <div className='d-flex align-items-center justif'>
    <Link href='/' className='logo d-flex align-items-center'>
    <span className='d-none d-lg-block'>EASY Report </span>
    </Link>
    <i 
    className='bi bi-list toggle-sidebar-btn'
    onClick={handleToggleSideBar}
    >

    </i>

 </div>
  )
}

export default Logo