import React from 'react'
import { CircularProgress, Box } from '@mui/material'

const Loading = () => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#001b2b',
      zIndex: 1000
    }}
  >
    <CircularProgress color="inherit" sx={{ color: '#ffa500' }} />
  </Box>
)

export default Loading
