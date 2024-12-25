import { DesktopNav } from "@/components/navigation/desktop-nav";
import { MobileNav } from "@/components/navigation/mobile-nav";
import StatsCard from "@/components/v0/stats-card";

export default async function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <DesktopNav />
      <MobileNav />
      <StatsCard />
    </div>
  );
}
