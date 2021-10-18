import React from 'react';
import { Box, Typography } from '@material-ui/core';

import img from '../../assets/cat.png';

export const ThanksScreen = () => {
    return (
      <Box sx={{ textAlign: 'center' }}>
        <img src={img} alt="" width={300} />
        <Typography variant='h5'>Muito obrigado pelo cadastro!!</Typography> 
      </Box>
    );
}