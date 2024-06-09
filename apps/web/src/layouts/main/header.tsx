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

export default function Header() {
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
        <LoginButton />
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
        }}
      >
        {toolBarContainer}
      </Toolbar>
    </AppBar>
  );
}
