import { Theme } from '@mui/material/styles';
import { merge } from 'lodash';

import { typography } from './components/typography';
import { cssBaseline } from './components/css-baseline';
import { defaultProps } from './default-props';
import { appBar } from './components/appbar';

export function componentsOverrides(theme: Theme): any {
  const components = merge(
    defaultProps(theme),
    //
    appBar(theme),
    typography(theme),
    cssBaseline(theme),
  );

  return components;
}
