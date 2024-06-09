import { Button, SxProps } from '@mui/material';
import { PATH_AFTER_LOGIN } from '~rfjs/web/config-global';
import { RouterLink } from '~rfjs/web/routes/components';

type Props = {
  sx?: SxProps;
};

export default function LoginButton({ sx }: Readonly<Props>) {
  return (
    <Button
      component={RouterLink}
      href={PATH_AFTER_LOGIN}
      sx={{ mr: 1, ...sx }}
      variant={'outlined'}
    >
      Login
    </Button>
  );
}
