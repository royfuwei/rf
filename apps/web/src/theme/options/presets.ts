import { alpha } from '@mui/material/styles';

import { grey, primary } from '../palette';
import { ThemeColorPresetType } from '~rfjs/web/components/settings/types';

// ----------------------------------------------------------------------

export function createPresets(preset: ThemeColorPresetType) {
  const primaryColor = getPrimary(preset);

  const primaryCustomShadows = alpha(`${primaryColor?.main}`, 0.24);

  const theme = {
    palette: {
      primary: primaryColor,
    },
    customShadows: {
      primary: `0 8px 16px 0 ${primaryCustomShadows}`,
    },
  };
  return {
    ...theme,
  };
}

// ----------------------------------------------------------------------

const orange = {
  lighter: '#FEF4D4',
  light: '#FED680',
  main: '#fda92d',
  dark: '#B66816',
  darker: '#793908',
  contrastText: grey[800],
};

const cyan = {
  lighter: '#CCF4FE',
  light: '#68CDF9',
  main: '#078DEE',
  dark: '#0351AB',
  darker: '#012972',
  contrastText: '#FFFFFF',
};

export const presetOptions = [
  { name: 'default', value: primary.main },
  { name: 'cyan', value: cyan.main },
  { name: 'orange', value: orange.main },
];

export function getPrimary(preset: ThemeColorPresetType) {
  return {
    default: primary,
    cyan,
    orange,
  }[preset];
}
