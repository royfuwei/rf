const ROOTS = {
  HOME: '/home',
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

export const paths = {
  uri: '',
  home: {
    root: ROOTS.HOME,
  },
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
    },
  },
  dashboard: {
    root: ROOTS.DASHBOARD,
  },
};
