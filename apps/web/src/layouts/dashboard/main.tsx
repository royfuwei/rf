import { Box, BoxProps } from '@mui/material';
import { HEADER } from '../config-layout';

const SPACING = 8;

export default function Main({ children, sx, ...other }: Readonly<BoxProps>) {
  return (
    <Box
      component={'main'}
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: 'flex',
        flexDirection: 'column',
        py: `${HEADER.H_MOBILE + SPACING}px`,
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
