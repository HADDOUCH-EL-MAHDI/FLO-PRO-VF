import React from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';

const StyledBox = ({ children }) => {
  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #FF3399, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      {children}
    </Box>
  );
};

export default StyledBox;
