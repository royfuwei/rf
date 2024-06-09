import AuthClassicLayout from '../../../../layouts/auth/classic';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Readonly<Props>) {
  return <AuthClassicLayout>{children}</AuthClassicLayout>;
}
