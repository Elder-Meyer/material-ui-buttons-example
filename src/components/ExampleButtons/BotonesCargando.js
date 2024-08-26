import React from 'react'
import { LoadingButton } from '@mui/lab'
import SaveIcon from '@mui/icons-material/Save'

import '../../App.css'

export const BotonesCargando = () => {
  return (
    <div className='container-buttons'>
      <div className='item-button'>
        <LoadingButton loading variant='outlined'>
          Submit
        </LoadingButton>
      </div>
      <div className='item-button' >
        <LoadingButton loading loadingIndicator="Loading..." variant='outlined'>
          Fetch data
        </LoadingButton>
      </div>
      <div className='item-button'>
        <LoadingButton
          loading
          loadingPosition='start'
          startIcon={<SaveIcon/>}
          variant="outlined"
        >
          Save
        </LoadingButton>
      </div>
    </div>
  )
}
