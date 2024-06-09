import {
  ThemeContrastType,
  ThemeModeType,
} from '~rfjs/web/components/settings/types';
import { grey } from '../palette';
import { customShadows } from '../custom-shadows';

export function createContrast(
  contrast: ThemeContrastType,
  mode: ThemeModeType,
) {
  const paletteByBoldLight =
    contrast === 'bold' && mode === 'light'
      ? {
          palette: {
            background: {
              default: grey[200],
            },
          },
        }
      : {};

  const theme = {
    ...paletteByBoldLight,
  };

  const componentsByBold =
    contrast === 'bold'
      ? {
          MuiCard: {
            styleOverrides: {
              root: {
                boxShadow: customShadows(mode).z1,
              },
            },
          },
        }
      : {};

  const components = {
    ...componentsByBold,
  };

  return {
    ...theme,
    components,
  };
}
