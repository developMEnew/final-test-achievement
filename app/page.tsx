import { HomeTab } from "@/components/v0/home-tab";
import { DesktopNav } from "@/components/navigation/desktop-nav";
import { MobileNav } from "@/components/navigation/mobile-nav";


export default async function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col pt-14">
      <DesktopNav />
      <MobileNav />
     <HomeTab/>
    </div>
  );
}
