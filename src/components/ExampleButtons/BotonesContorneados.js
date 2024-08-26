import React from 'react'
import { Button } from '@mui/material'

import '../../App.css'

export const BotonesContorneados = () => {
  return (
    <div className='container-buttons'>
      <div className='item-button'>
        <Button variant='outlined'>Primary</Button>
      </div>
      <div className='item-button'>
        <Button variant='outlined' disabled>Disabled</Button>
      </div>
      <div className='item-button'>
        <Button variant='outlined' href='###'>Link</Button>
      </div>
    </div>
  )
}
