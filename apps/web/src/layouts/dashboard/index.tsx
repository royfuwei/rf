import { Box } from '@mui/material';
import Header from './header';
import Main from './main';
import NavVertical from './nav-vertical';

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Readonly<Props>) {
  const renderNavVertical = <NavVertical openNav={true} />;
  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        {renderNavVertical}
        <Main>{children}</Main>
      </Box>
    </>
  );
}
