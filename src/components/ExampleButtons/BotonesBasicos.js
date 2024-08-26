import React from 'react'
import { Button } from '@mui/material'


import '../../App.css'

export const BotonesBasicos = () => {
  return (
    <div className='container-buttons'>
      <div className='item-button'>    
        <Button variant='text'>Text</Button>
      </div>
      <div className='item-button'>
        <Button variant='contained'>Contained</Button>
      </div>
      <div className='item-button'>
        <Button variant='outlined'>Outlined</Button>
      </div>
    </div>
  )
}
