'use client';

import DashboardLayout from '~rfjs/web/layouts/dashboard';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Readonly<Props>) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
