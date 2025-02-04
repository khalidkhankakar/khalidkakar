import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import DevStack from "@/components/DevStack";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";
import Work from "@/components/Work";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <About />
      <Work />
      <Blog />
      <DevStack />
      <Project />
      <Contact />
    </main>
  );
};

export default Home;
