import { Box, TextField } from '@mui/material'
import React from 'react'
import SingleBedIcon from '@mui/icons-material/SingleBed';
import CloseIcon from '@mui/icons-material/Close';
function InputPlace({field}) {
  return (
    <Box sx={{borderRadius:1,padding:1}}>
      <Box display={"flex"} justifyContent={'center'} alignItems={"center"}>
        <div className='Icon'>
            <SingleBedIcon/>
        </div>
        <div className='input'>
            <TextField {...field}/>
        </div>
        <div className='icon_delete'>
            <CloseIcon/>
        </div>
      </Box>
    </Box>
  )
}

export default InputPlace
