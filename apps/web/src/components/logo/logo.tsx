import { BoxProps, Box, Link } from '@mui/material';
import { forwardRef } from 'react';
import { PATH_ROOT } from '~rfjs/web/config-global';
import { RouterLink } from '~rfjs/web/routes/components';

export type Props = BoxProps & {
  disabledLink?: boolean;
  href?: string;
};

const Logo = forwardRef<HTMLDivElement, Props>(
  ({ disabledLink = false, href = PATH_ROOT, sx, ...other }, ref) => {
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
      <Link component={RouterLink} href={href} sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  },
);
Logo.displayName = 'Logo';

export default Logo;
