import { DesktopNav } from '@/components/navigation/desktop-nav';
import { MobileNav } from '@/components/navigation/mobile-nav';
import { authConfig } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export default async function RootLayout() {
  const session = await getServerSession(authConfig);
  return (
    <div className="min-h-screen flex flex-col">
      <DesktopNav />
      <MobileNav />
      <main className="flex-1 container mx-auto p-4 md:p-6 pb-20 md:pb-6">
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome {session?.user?.name}</h2>
          <p className="text-muted-foreground">
            This is your dashboard overview. Start exploring the different sections using the navigation.
          </p>
        </div>
      </main>
    </div>
  );
}