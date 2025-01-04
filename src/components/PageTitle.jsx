import React from 'react'
import './pageTitle.css'

function PageTitle({pagename,page}) {
  return (
        <div className='pagetitle' id='main'>
            <h1>{pagename}</h1>
            <nav>
                <ol className='breadcrumb'>
                    <li className='breadcumb-item'>
                        <a href="/">
                            <i className='bi bi-house-door'></i>
                        </a>
                    </li>
                    <li className='breadcrumb-item active'>{page}</li>
                </ol>
            </nav>
        </div>
  )

}

export default PageTitle