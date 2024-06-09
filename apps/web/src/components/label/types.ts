import { BoxProps } from '@mui/material';

export type LabalColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

export type LabelVariant = 'filled' | 'outlined' | 'soft';

export type LabelProps = BoxProps & {
  startIcon?: React.ReactElement | null;
  endIcon?: React.ReactElement | null;
  color?: LabalColor;
  variant?: LabelVariant;
};
