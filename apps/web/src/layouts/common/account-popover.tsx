import { IconButton } from '@mui/material';
import { Iconify } from '~rfjs/web/components/iconify';
import { PATH_ROOT } from '~rfjs/web/config-global';
import { RouterLink } from '~rfjs/web/routes/components';

export default function AccountPopover() {
  return (
    <IconButton component={RouterLink} href={PATH_ROOT}>
      <Iconify icon="solar:user-rounded-bold-duotone" width={24}></Iconify>
    </IconButton>
  );
}
