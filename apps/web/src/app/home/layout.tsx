'use client';

import MainLayout from '~rfjs/web/layouts/main';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Readonly<Props>) {
  return <MainLayout>{children}</MainLayout>;
}
