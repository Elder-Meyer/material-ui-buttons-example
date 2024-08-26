import React from 'react'
import { Stack } from '@mui/material'
import { Button } from '@mui/material'
import { IconButton } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'

import '../../App.css'

export const BotonesSubir = () => {
  return (
    <div className='container-buttons'>
      <div className='item-button'>  
        <Stack direction="row" alignItems="center" spacing={2}>
            <Button variant='contained' component="label">
              Upload
              <input hidden accept='image/*' multiple type="file" />
            </Button>
        </Stack>
      </div>
      <div className='item-button'>
          <IconButton color='primary' aria-label='upload picture' component="label">
            <input hidden accept='image/*' type="file" />
            <PhotoCamera/>
          </IconButton>
      </div>
    </div>
  )
}
