import React from 'react'
import './main.css'

import PageTitle from './PageTitle'

function Main() {
  return (
    <main id='main' className='main'>
        <PageTitle id='breadcrumb-shift' pagename={'Report Overview'}page={'/'}/>
    </main>
  )
}

export default Main