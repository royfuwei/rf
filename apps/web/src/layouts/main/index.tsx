import { Box } from '@mui/material';
import { usePathname } from '~rfjs/web/hooks/use-pathname';
import Header from './header';
import Footer from './footer';

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Readonly<Props>) {
  const pathname = usePathname();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: { xs: 8, md: 10 },
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
}
