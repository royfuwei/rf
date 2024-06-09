import { Box, Stack } from '@mui/material';
import { Minimal } from '@rfjs/minimal';

export default function HomeHero() {
  return (
    <>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          height: 1,
          mx: 'auto',
          maxWidth: 480,
          opacity: 0.7,
          mt: {
            // md:
          },
        }}
      >
        <Minimal id={'welcome'} />
      </Stack>
      <Box sx={{ height: { md: '50vh' } }} />
    </>
  );
}
