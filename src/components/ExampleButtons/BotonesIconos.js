import React from 'react'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AlarmIcon from '@mui/icons-material/Alarm'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

import '../../App.css'

export const BotonesIconos = () => {
  return (
    <div className='container-buttons'>
      <div className='item-button'>
        <IconButton aria-label='delete'>
          <DeleteIcon/>
        </IconButton>
      </div>
      <div className='item-button'>
        <IconButton aria-label='delete' disabled color='primary'>
          <DeleteIcon/>
        </IconButton>
      </div>
      <div className='item-button'>
        <IconButton color='secondary' aria-label='add an alarm'>
          <AlarmIcon/>
        </IconButton>
      </div>
      <div className='item-button'>
        <IconButton color='primary' aria-label='add to shopping cart'>
          <AddShoppingCartIcon/>
        </IconButton>
      </div>
    </div>
  )
}
