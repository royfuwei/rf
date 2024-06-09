import { Box, Container, Link, Typography } from '@mui/material';
import { Logo } from '~rfjs/web/components/logo';

export default function Footer() {
  const simpleFooter = (
    <Box
      component="footer"
      sx={{
        py: 5,
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Container>
        <Logo sx={{ mb: 1, mx: 'auto' }} />

        <Typography variant="caption" component="div">
          © All rights reserved
          <br /> made by
          <Link href="https://royfuwei.com/"> royfuwei.com </Link>
        </Typography>
      </Container>
    </Box>
  );

  return <>{simpleFooter}</>;
}
