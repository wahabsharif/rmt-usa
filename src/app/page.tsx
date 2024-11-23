import Features from "@/components/home/Features";
import HomeBanner from "@/components/home/HomeBanner";
import { OurClientsPartners } from "@/components/home/OurClientsPartners";
import OurServices from "@/components/home/OurServices";
import SecondBanner from "@/components/home/SecondBanner";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <SecondBanner />
      <OurServices />
      <Features />
      <OurClientsPartners />
    </>
  );
}
