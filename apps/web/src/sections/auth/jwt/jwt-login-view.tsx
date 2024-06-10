'use client';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Alert,
  Box,
  IconButton,
  InputAdornment,
  Link,
  Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Stack from '@mui/material/Stack';
import { useForm } from 'react-hook-form';
import { FormProvider, RHFTextField } from '~rfjs/web/components/hook-form';
import { Iconify } from '~rfjs/web/components/iconify';
import { useBoolean } from '~rfjs/web/hooks/use-boolean';
import { delay } from 'lodash';
import { useSearchParams } from '~rfjs/web/hooks/use-search-params';
import { useRouter } from '~rfjs/web/routes/hooks';
import { PATH_DASHBOARD } from '~rfjs/web/config-global';
import { useState } from 'react';

export default function JwtLoginView() {

  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState('');

  const password = useBoolean();

  const returnTo = useSearchParams().get('returnTo');

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
  });

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const { 
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      delay(() => {
        if (data.email != 'demo@royfuwei.dev' || data.password != 'demo1234') {
          setErrorMessage('Invalid email or password');
          reset();
          return;
        }
        router.push(returnTo ?? PATH_DASHBOARD);
      }, 1000);
    } catch (error: any) {
      console.error(error);
      reset();
      setErrorMessage(typeof error === 'string' ? error : error.message);
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
      <RHFTextField name="email" label="Email Address" />

      <RHFTextField
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
      />

      <Link
        variant="body2"
        color="inherit"
        underline="always"
        sx={{ alignSelf: 'flex-end' }}
      >
        Forgot password?
      </Link>

      <LoadingButton
        fullWidth
        color='inherit'
        size='large'
        type='submit'
        variant='contained'
        loading={isSubmitting}
      >
        Login
      </LoadingButton>
    </Stack>
  );

  const renderError = (
    <Box>
      <Alert severity='error' sx={{ mb: 3 }}>
        {errorMessage}
      </Alert>
    </Box>
  );

  return (
    <>
      {renderHead}

      {!!errorMessage && renderError}

      <FormProvider methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </FormProvider>
    </>
  );
}
