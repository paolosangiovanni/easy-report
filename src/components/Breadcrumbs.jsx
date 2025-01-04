import React from 'react'
import './breadcrumbs.css'
import {
    Breadcrumbs as MUIBreadcrumbs,
} from '@mui/material'
import { useLocation, Link} from 'react-router-dom';

const Breadcrumbs = props =>{
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className='breadcrumb-items' id='main'>
        <MUIBreadcrumbs aria-label='breadcrumb'>
            <Link to='/' className='bi bi-house-door' id='link-item-home'></Link>
        {pathnames.map((name,index) =>{
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            return <Link to={routeTo} className='link-item'>{name}</Link>})}

    </MUIBreadcrumbs>
    

    </div>

  );
};
export default Breadcrumbs;
