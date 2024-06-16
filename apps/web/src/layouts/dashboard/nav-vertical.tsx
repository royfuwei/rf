import { Box, Stack } from '@mui/material';
import { NAV } from '../config-layout';
import { Logo } from '~rfjs/web/components/logo';
import { PATH_DASHBOARD } from '~rfjs/web/config-global';
import NavSectionVertical from '~rfjs/web/components/nav-section/vertical/nav-section-vertical';
import { useNavData } from './config-navigation';

type Props = {
  openNav: boolean;
  onCloseNav?: () => void;
};

export default function NavVertical({ openNav, onCloseNav }: Readonly<Props>) {
  const navData = useNavData();
  const renderContent = (
    <>
      <NavSectionVertical data={navData} slotProps={{}} />

      <Box sx={{ flexGrow: 1 }} />
    </>
  );
  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_VERTICAL },
      }}
    >
      <Stack
        sx={{
          height: 1,
          position: 'fixed',
          width: NAV.W_VERTICAL,
          borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      >
        <Logo href={PATH_DASHBOARD} sx={{ mt: 3, ml: 4, mb: 1 }} />

        {renderContent}
      </Stack>
    </Box>
  );
}
