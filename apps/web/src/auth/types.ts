export type ActionMapType<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type AuthUserType = null | Record<string, any>;

export type AuthStateType = {
  status?: string;
  loading: boolean;
  user: AuthUserType;
};

export type JWTContextType = {
  user: AuthUserType;
  method: string;
  loading: boolean;
  autheticated: boolean;
  unauthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ) => Promise<void>;
  logout: () => Promise<void>;
};
