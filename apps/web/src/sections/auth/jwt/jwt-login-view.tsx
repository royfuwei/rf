'use client';
import {
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import Stack from '@mui/material/Stack';
import { useForm } from 'react-hook-form';
import { FormProvider } from '~rfjs/web/components/hook-form';
import { Iconify } from '~rfjs/web/components/iconify';
import { useBoolean } from '~rfjs/web/hooks/use-boolean';

export default function JwtLoginView() {

  const password = useBoolean();

  const methods = useForm({
    // resolver: yupRes
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  });

  const renderHead = (
    <Stack spacing={2} sx={{ mb: 5 }}>
      <Typography variant="h4" sx={{ color: 'text.primary' }}>
        Sign in
      </Typography>
      <Stack direction="row" spacing={0.5}>
        <Typography sx={{ color: 'text.secondary' }}>
          Enter your details below
        </Typography>
      </Stack>
    </Stack>
  );

  const renderForm = (
    <Stack spacing={2.5}>
      <TextField name="email" label="Email Address" />

      <TextField
        name="password"
        label="Password"
        type={password.value ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={password.onToggle} edge="end">
                <Iconify
                  icon={
                    password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'
                  }
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
        // type
      />

      <Link
        variant="body2"
        color="inherit"
        underline="always"
        sx={{ alignSelf: 'flex-end' }}
      >
        Forgot password?
      </Link>
    </Stack>
  );

  return (
    <>
      {renderHead}

      <FormProvider methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </FormProvider>
    </>
  );
}
