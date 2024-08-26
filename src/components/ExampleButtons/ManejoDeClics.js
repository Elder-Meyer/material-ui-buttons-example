import React from 'react'
import '../../App.css'
import { Button } from '@mui/material'

export const ManejoDeClics = () => {
  return (
    <div className='container-buttons'>
      <div className='item-button'>
        <Button 
          onClick={()=>{
            alert("Nya");
          }}
        >
          Press Me
        </Button>
      </div>
    </div>
  )
}
