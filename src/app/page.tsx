import Features from "@/components/home/Features";
import HomeBanner from "@/components/home/HomeBanner";
// import HomeVideo from "@/components/home/HomeVideo";
import { OurClientsPartners } from "@/components/home/OurClientsPartners";
import OurServices from "@/components/home/OurServices";
import SecondBanner from "@/components/home/SecondBanner";
import ThirdSection from "@/components/home/ThirdSection";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <SecondBanner />
      <OurServices />
      <Features />
      <OurClientsPartners />
      <ThirdSection />
      {/* <HomeVideo /> */}
    </>
  );
}
