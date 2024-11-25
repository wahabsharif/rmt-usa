import Features from "@/components/home/Features";
import HomeBannerTwo from "@/components/home/HomeBannerTwo";
import { OurClientsPartners } from "@/components/home/OurClientsPartners";
import OurServices from "@/components/home/OurServices";
import SecondBanner from "@/components/home/SecondBanner";
import ThirdSection from "@/components/home/ThirdSection";

export default function Home() {
  return (
    <>
      <HomeBannerTwo />
      <SecondBanner />
      <OurServices />
      <Features />
      <OurClientsPartners />
      <ThirdSection />
    </>
  );
}
