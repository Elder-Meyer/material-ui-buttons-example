import React from 'react'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'

import '../../App.css'

export const BotonesIcoEtiq = () => {
  return (
    <div className='container-buttons'>
      <div className='item-button'>
        <Button variant='outlined' startIcon={<DeleteIcon/>}>Delete</Button>
      </div>
      <div className='item-button'>
        <Button variant='contained' endIcon={<SendIcon/>}>Send</Button>
      </div>
    </div>
  )
}
