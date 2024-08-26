import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';

import '../../App.css'

export const ToggleLoading = () => {

    const [loading, setLoading] = React.useState(true);
        function handleClick() {
        setLoading(true);
    }

  return (
    <>
        <div className='container-buttons'>
            <div className='item-button'>
            <FormControlLabel
                sx={{
                    display: 'block',
                }}
                control={
                    <Switch
                    checked={loading}
                    onChange={() => setLoading(!loading)}
                    name="loading"
                    color="primary"
                    />
                }
                label="Loading"
                />
            </div>
        </div>

        <div className='container-buttons'>
            <div className='item-button'>
                <LoadingButton
                    size="small"
                    onClick={handleClick}
                    loading={loading}
                    variant="outlined"
                    disabled
                    >
                    disabled
                </LoadingButton>
            </div>
            <div className='item-button'>
                <LoadingButton
                    size="small"
                    onClick={handleClick}
                    loading={loading}
                    loadingIndicator="Loading…"
                    variant="outlined"
                    >
                    Fetch data
                </LoadingButton>
            </div>
            <div className='item-button'>
                <LoadingButton
                    size="small"
                    onClick={handleClick}
                    endIcon={<SendIcon />}
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                    >
                    Send
                </LoadingButton>
            </div>
            <div className='item-button'>
                <LoadingButton
                    size="small"
                    color="secondary"
                    onClick={handleClick}
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="contained"
                    >
                    Save
                </LoadingButton>
            </div>
        </div>
      
        <div className='container-buttons'>
            <div className='item-button'>
                <LoadingButton
                    onClick={handleClick}
                    loading={loading}
                    variant="outlined"
                    disabled
                    >
                    disabled
                </LoadingButton>
            </div>
            <div className='item-button'>
                <LoadingButton
                    onClick={handleClick}
                    loading={loading}
                    loadingIndicator="Loading…"
                    variant="outlined"
                    >
                    Fetch data
                </LoadingButton>
            </div>
            <div className='item-button'>
                <LoadingButton
                    onClick={handleClick}
                    endIcon={<SendIcon />}
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                    >
                    Send
                </LoadingButton>
            </div>
            <div className='item-button'>
                <LoadingButton
                    color="secondary"
                    onClick={handleClick}
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="contained"
                    >
                    Save
                </LoadingButton>
            </div>
        </div>   
    </>
  )
}
