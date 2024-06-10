import { BoxProps, Box, Link } from '@mui/material';
import { forwardRef } from 'react';
import { RouterLink } from '~rfjs/web/routes/components';

export type Props = BoxProps & {
  disabledLink?: boolean;
};

const Logo = forwardRef<HTMLDivElement, Props>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const logo = (
      <Box
        ref={ref}
        component="img"
        src="/assets/logo/logo-192x192.png"
        sx={{
          width: 40,
          height: 40,
          cursor: 'pointer',
          ...sx,
        }}
        {...other}
      />
    );
    if (disabledLink) {
      return logo;
    }
    return (
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  },
);
Logo.displayName = 'Logo';

export default Logo;
