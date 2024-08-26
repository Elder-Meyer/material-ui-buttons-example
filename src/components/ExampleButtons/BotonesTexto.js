import React from 'react'
import { Button } from '@mui/material'

import '../../App.css'

export const BotonesTexto = () => {
  return (
    <div className='container-buttons'>
      <div className='item-button'>
        <Button>Primary</Button>
      </div>
      <div className='item-button'>
        <Button disabled>disabled</Button>
      </div>
      <div className='item-button'>
        <Button href='#'>Link</Button>
      </div>
    </div>
  )
}
