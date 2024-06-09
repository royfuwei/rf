'use client';

import merge from 'lodash/merge';
import {
  ThemeProvider as MuiThemeProvider,
  ThemeOptions,
  createTheme,
} from '@mui/material/styles';
import { useMemo } from 'react';
import { createPresets } from './options/presets';
import { useSettingsContext } from '../components/settings/context/setting-context';
import { palette } from './palette';
import { shadows } from './shadows';
import { typography } from './typography';
import {
  ThemeColorPresetType,
  ThemeContrastType,
  ThemeDirectionType,
  ThemeModeType,
} from '../components/settings/types';
import { customShadows } from './custom-shadows';
import { createContrast } from './options/contrast';
import { componentsOverrides } from './overrides';
import CssBaseline from '@mui/material/CssBaseline';

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Readonly<Props>) {
  const settings = useSettingsContext();

  const themeMode: ThemeModeType = settings.themeMode ?? 'dark';
  const themeColorPreset: ThemeColorPresetType =
    settings.themeColorPresets ?? 'orange';
  const themeContrast: ThemeContrastType = settings.themeContrast ?? 'default';
  const themeDirection: ThemeDirectionType = 'ltr';

  const presets = createPresets(themeColorPreset);

  const contrast = createContrast(themeContrast, themeMode);

  const memoizedValue = useMemo(
    () => ({
      palette: {
        ...palette(themeMode),
        ...presets.palette,
        ...contrast.palette,
      },
      customShadows: {
        ...customShadows(themeMode),
        ...presets.customShadows,
      },
      direction: themeDirection,
      shadows: shadows(themeMode),
      shape: { borderRadius: 8 },
      typography,
    }),
    [themeMode, presets.palette, presets.customShadows, contrast.palette],
  );

  const theme = createTheme(memoizedValue as ThemeOptions);

  theme.components = merge(componentsOverrides(theme), contrast.components);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
