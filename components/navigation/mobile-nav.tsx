'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Settings, Users, BarChart3, Calendar } from 'lucide-react';
import { UserNav } from './user-nav';
import { AuthButton } from './auth-button';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Team', href: '/team', icon: Users },
  { name: 'Calendar', href: '/calendar', icon: Calendar },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function MobileNav() {
  const pathname = usePathname();
  // TODO: Replace with actual auth state
  const { status } = useSession();
  const [isAuthenticated , setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [status]);;

  return (
    <>
      <div className="md:hidden h-14 flex items-center justify-between px-4 border-b bg-background fixed top-0 left-0 right-0">
        <h1 className="text-lg font-semibold">
          {navigation.find((item) => item.href === pathname)?.name || 'Dashboard'}
        </h1>
        <div>
          {isAuthenticated ? <UserNav /> : <AuthButton />}
        </div>
      </div>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-background">
        <div className="flex justify-around py-3">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex flex-col items-center space-y-1',
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}