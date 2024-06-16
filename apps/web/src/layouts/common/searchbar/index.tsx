import { IconButton, Stack } from '@mui/material';
import { memo } from 'react';
import { Iconify } from '~rfjs/web/components/iconify';

function Searchbar() {
  const renderButton = (
    <Stack direction="row" alignItems="center">
      <IconButton>
        <Iconify icon="eva:search-fill" width={24} />
      </IconButton>
    </Stack>
  );
  return <>{renderButton}</>;
}

export default memo(Searchbar);
