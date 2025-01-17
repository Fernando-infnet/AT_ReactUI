import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const DefaultCircularIndeterminate = () => {
  return <>
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  </>
}

export default DefaultCircularIndeterminate;