import React from 'react'
import '../../App.css'
import { Button } from '@mui/material'

export const BotonesColor = () => {
  return (
    <div className='container-buttons'>
      <div className='item-button'>
        <Button color='secondary'>secondary</Button>
      </div>
      <div className='item-button'>
        <Button variant='contained' color='success'>success</Button>
      </div>
      <div className='item-button'>
        <Button variant='outlined' color='error'>Error</Button>
      </div>
    </div>
  )
}
