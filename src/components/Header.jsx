import React from 'react';
import './Header.css';
import Logo from './Logo';

function Header() {
  return (
<header id='header' className='header fixed-top d-flex align-items-center'>
    {/* {logo} */}
    <Logo/>

</header>
  )
}

export default Header