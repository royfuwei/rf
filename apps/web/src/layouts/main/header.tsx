import {
  AppBar,
  Badge,
  Box,
  Container,
  Stack,
  Toolbar,
  badgeClasses,
} from '@mui/material';
import { HEADER } from '../config-layout';
import { Logo } from '~rfjs/web/components/logo';
import LoginButton from '../common/login-button';
import { useResponsive } from '~rfjs/web/hooks/use-responsive';
import { useOffSetTop } from '~rfjs/web/hooks/use-off-set-top';
import { bgBlur } from '~rfjs/web/theme/css';
import { useTheme } from '@mui/material/styles';
import HeaderShadow from '../common/header-shadow';

export default function Header() {
  const theme = useTheme();

  const mdUp = useResponsive('up', ['md']);

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  const toolbarOffsetConfig = offsetTop ? {
    ...bgBlur({
      color: theme.palette.background.default,
    }),
    height: {
      md: HEADER.H_DESKTOP_OFFSET
    }
  } : {};

  const badgeLogo = (
    <Badge
      sx={{
        [`&.${badgeClasses.badge}`]: {
          top: 8,
          right: -16,
        },
      }}
      badgeContent={''}
    >
      <Logo />
    </Badge>
  );

  const toolBarContainer = (
    <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
      {badgeLogo}
      <Box sx={{ flexGrow: 1 }}>
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          Royfuwei&apos;s Test Web App
        </Container>
      </Box>
      <Stack alignItems={'center'} direction={'row'} spacing={2}>
        {mdUp ? <LoginButton /> : null}
      </Stack>
    </Container>
  );

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...toolbarOffsetConfig,
        }}
      >
        {toolBarContainer}
      </Toolbar>

      { offsetTop ? <HeaderShadow /> : null}
    </AppBar>
  );
}
