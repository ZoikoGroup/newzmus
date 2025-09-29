import Header from "./components/Header";
import HomeBanner from "./components/HomeBanner";
import HomeSecA from "./components/HomeSecA";
import Footer from "./components/Footer";
import WhyChooseZoiko from "./components/WhyChooseZoiko";
import Testimonials from "./components/Testimonials";
import GetHelp from "./components/GetHelp";

export default function Home() {
  return (
    <>
    <Header />
    <HomeBanner />
    <HomeSecA />
    <WhyChooseZoiko />
    <GetHelp />
    <Testimonials />
    <Footer />
    </>
  );
}
