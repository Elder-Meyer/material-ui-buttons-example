import React from 'react'
import { Button } from '@mui/material'

import '../../App.css'

export const BotonesContenido = () => {
  return (
    <>
        <div className='container-buttons'>
            <div className='item-button'>
                <Button variant='contained'>Contained</Button>
            </div>
            <div className='item-button'>
                <Button variant='contained' disabled>Disabled</Button>
            </div>
            <div className='item-button'>
                <Button variant='contained' href='##'>Link</Button>
            </div>
            </div>

            <div className='container-buttons'>
            <div className='item-button'>
                <Button variant='contained' disableElevation>Disable elevation</Button>
            </div>
        </div>
    </>
  )
}
