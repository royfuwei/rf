export type ThemeModeType = 'light' | 'dark';
export type ThemeDirectionType = 'ltr' | 'rtl';
export type ThemeColorPresetType = 'default' | 'cyan' | 'orange';
export type ThemeContrastType = 'default' | 'bold';
export type ThemeLayoutType = 'vertical' | 'horizontal' | 'mini';

export type SettingsValueProps = {
  themeStretch: boolean;
  themeMode: ThemeModeType;
  themeDirection: ThemeDirectionType;
  themeContrast: ThemeContrastType;
  themeLayout: ThemeLayoutType;
  themeColorPresets: ThemeColorPresetType;
};

export type SettingsContextProps = SettingsValueProps & {
  // Update
  onUpdate: (name: string, value: string | boolean) => void;
  // Direction by lang
  onChangeDirectionByLang: (lang: string) => void;
  // Reset
  canReset: boolean;
  onReset: VoidFunction;
  // Drawer
  open: boolean;
  onToggle: VoidFunction;
  onClose: VoidFunction;
};
