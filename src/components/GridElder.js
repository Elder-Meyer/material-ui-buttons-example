import { Grid, Typography } from '@mui/material'
import React from 'react'

export const GridElder = () => {
  return (
    <div>
        <Grid container spacing={17}>
            <Grid item xs={12} sx={{border: "2px solid blue"}}>
                <Typography>xs=8</Typography>
            </Grid>
            <Grid item xs={6} sx={{border: "2px solid blue"}}>
                <Typography>xs=4</Typography>
            </Grid>
            <Grid item xs={6} sx={{border: "2px solid blue"}}>
                <Typography>xs=4</Typography>
            </Grid>
            <Grid item xs={12} sx={{border: "2px solid blue"}}>
                <Typography>xs=8</Typography>
            </Grid>
        </Grid>
    </div>
  )
}
