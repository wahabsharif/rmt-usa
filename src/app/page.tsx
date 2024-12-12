import About from "@/components/home/About";
import Features from "@/components/home/Features";
// import HomeBannerTwo from "@/components/home/HomeBannerTwo";
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
      {/* <HomeBannerTwo /> */}
      <About />
      <SecondBanner />
      <OurServices />
      <Features />
      <OurClientsPartners />
      <ThirdSection />
      {/* <HomeVideo /> */}
    </>
  );
}
