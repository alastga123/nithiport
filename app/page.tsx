import LiquidChrome from "@/components/ui/liquid-chrome";
import HomeSwiper from "@/components/HomeSwiper";

export default function Home() {
  return (
    <>
      <LiquidChrome />
      <div className="fixed inset-0 -z-10 bg-bg/80 pointer-events-none" />
      <HomeSwiper />
    </>
  );
}
