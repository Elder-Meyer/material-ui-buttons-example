import React from 'react'
import '../../App.css'
import { Button } from '@mui/material'

export const BotonesTamanio = () => {
  return (
    <>
    <div className='container-buttons'>
      <div className='item-button'>
        <Button size='small'>Small</Button>
      </div>
      <div className='item-button'>
        <Button size='medium'>Medium</Button>
      </div>
      <div className='item-button'>
        <Button size='large'>Large</Button>
      </div>
    </div>

    <div className='container-buttons'>
      <div className='item-button'>
        <Button size='small' variant='outlined'>Small</Button>
      </div>
      <div className='item-button'>
        <Button size='medium' variant='outlined'>Medium</Button>
      </div>
      <div className='item-button'>
        <Button size='large' variant='outlined'>Large</Button>
      </div>
    </div>

    <div className='container-buttons'>
      <div className='item-button'>
        <Button size='small' variant='contained'>Small</Button>
      </div>
      <div className='item-button'>
        <Button size='medium' variant='contained'>Medium</Button>
      </div>
      <div className='item-button'>
        <Button size='large' variant='contained'>Large</Button>
      </div>
    </div>    
    </>
  )
}
