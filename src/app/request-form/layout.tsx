'use client';
import { Suspense } from 'react';
import { Toaster } from '@/components/ui/toaster';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div>{children}</div>
      <Toaster />
    </Suspense>
  );
}
