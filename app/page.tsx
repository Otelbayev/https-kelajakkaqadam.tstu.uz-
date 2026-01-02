import About from "@/components/about";
import Page from "@/components/page";
import Blog from "@/components/blog";
import KreditTartibi from "@/components/step";
import VideoSection from "@/components/videos";
import Showcase from "@/components/showcase";

const HomePage = () => {
  return (
    <div>
      <Showcase />
      <VideoSection />
      <About />
      <Blog />
      <KreditTartibi />
      <Page />
    </div>
  );
};

export default HomePage;
