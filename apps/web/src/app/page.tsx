'use client';

import { PATH_ROOT } from '../config-global';
import { useRouter } from '../routes/hooks';
import { useEffect } from 'react';

// ----------------------------------------------------------------------
export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push(PATH_ROOT);
  }, [router]);

  return null;
}
