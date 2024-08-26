import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

import '../../App.css'


const BootstrapButton = styled(Button)({
    color: "#4E9DA6",
    boxShadow: 'none',
    textTransform: 'capitalize',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#010D26',
    borderColor: '#F2CB9B',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: "#010D26",
      backgroundColor: '#F2CB9B',
      borderColor: '#010D26',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#4E9DA6',
      color: "#F2CB9B",
      borderColor: '#010D26',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(242,203,155,.5)',
    },
  });
  
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

export const BotonesPersonalizados = () => {
  return (
    <div className='container-buttons'>
      <div className='item-button'>
        <ColorButton variant="contained">Custom CSS</ColorButton>
      </div>
      <div className='item-button'>
        <BootstrapButton variant="contained" disableRipple>
            Bootstrap
        </BootstrapButton>
      </div>
    </div>
  )
}
