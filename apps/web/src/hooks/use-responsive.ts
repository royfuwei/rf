import { useMediaQuery } from '@mui/material';
import { Breakpoint, useTheme } from '@mui/material/styles';

export type Query = 'up' | 'down' | 'between' | 'only';

export type Value = Breakpoint | number;

export function useResponsive(
  query: Query,
  values: Value[] = [], 
): boolean {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(values[0]));
  const mediaDown = useMediaQuery(theme.breakpoints.down(values[0]));
  const mediaBetween = useMediaQuery(
    theme.breakpoints.between(values[0], values[1]),
  );
  const mediaOnly = useMediaQuery(theme.breakpoints.only(values[0] as Breakpoint));

  switch (query) {
    case 'up':
      return mediaUp;
    case 'down':
      return mediaDown;
    case 'between':
      return mediaBetween;
    case 'only':
      return mediaOnly;
    default:
      return mediaOnly;
  }
}
