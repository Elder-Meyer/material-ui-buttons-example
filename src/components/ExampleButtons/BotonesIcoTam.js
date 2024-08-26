import React from 'react'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import '../../App.css'

export const BotonesIcoTam = () => {
  return (
    <div className='container-buttons'>
      <div className='item-button'>
        <IconButton aria-label='delete' size='small'>
          <DeleteIcon fontSize='inherit'/>
        </IconButton>
      </div>
      <div className='item-button'>
        <IconButton aria-label='delete' size='small'>
          <DeleteIcon fontSize='small'/>
        </IconButton>
      </div>
      <div className='item-button'>
        <IconButton aria-label='delete' size='large'>
          <DeleteIcon/>
        </IconButton>
      </div>
      <div className='item-button'>
        <IconButton aria-label='delete' size='large'>
          <DeleteIcon fontSize='inherit'/>
        </IconButton>
      </div>
    </div>
  )
}
