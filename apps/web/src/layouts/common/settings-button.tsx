import { m } from 'framer-motion';
import { IconButton } from '@mui/material';
import { Iconify } from '~rfjs/web/components/iconify';

export default function SettingsButton() {
  return (
    <IconButton component={m.button} whileTap="tap" whileHover="hover">
      <Iconify icon="solar:settings-bold-duotone" width={24}></Iconify>
    </IconButton>
  );
}
