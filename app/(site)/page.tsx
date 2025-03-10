import About from "@/components/About";
import { Achievements } from "@/components/Achievement";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import DevStack from "@/components/DevStack";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";
import Work from "@/components/Work";

import { BoxReveal } from "@/components/magicui/box-reveal";
import { Timeline } from "@/components/ui/timeline";

const TIMELINE_DATA = [
  {
    title: (<BoxReveal boxColor={"#12fc37"} duration={0.5}>
      <h2 className="h2-bold mb-4   text-white">
        Explore <span className="text-green-1 font-lobster">Khalid&apos;s journey</span>
      </h2>
    </BoxReveal>),
    content: <About />
  },
  {
    title: (<BoxReveal boxColor={"#da1beb"} duration={0.5}>
      <h2 className="h2-bold mb-4   text-white">
        My <span className="text-pink-1 font-lobster">Work Experience</span>
      </h2>
    </BoxReveal>),
    content: <Work />
  },
  {
    title: (<BoxReveal boxColor={"#00fcce"} duration={0.5}>
      <h2 className="h2-bold mb-4   text-white">
        Latest <span className="text-cyan-1 font-lobster">Blog Post</span>
      </h2>
    </BoxReveal>),
    content: <Blog />
  },
  {
    title: (<BoxReveal boxColor={"#f4ac24"} duration={0.5}>
      <h2 className="h2-bold mb-4   text-white">
        My <span className="text-orange-1 font-lobster">Dev Stack</span>
      </h2>
    </BoxReveal>),
    content: <DevStack />
  },

  {
    title: (
      <BoxReveal boxColor={"#da1beb "} duration={0.5}>
        <h2 className="h2-bold mb-4   text-white">
          My <span className="text-pink-1 font-lobster">Projects</span>
        </h2>
      </BoxReveal>
    ),
    content: <Project />
  },

  {
    title: (
      <BoxReveal boxColor={"#f4ac24 "} duration={0.5}>
        <h2 className="h2-bold mb-4   text-white">
          My <span className="text-orange-1 font-lobster">Achievements</span>
        </h2>
      </BoxReveal>
    ),
    content: <Achievements />
  },
  {
    title: (
      <BoxReveal boxColor={"#da1beb "} duration={0.5}>
        <h2 className="h2-bold mb-4   text-white">
          Get <span className="text-pink-1 font-lobster">in Touch</span>
        </h2>
      </BoxReveal>
    ),
    content: <Contact />
  }
]

const Home = () => {
  return (
    <main>
      <HeroSection />
      <Timeline data={TIMELINE_DATA} />
    </main>
  );
};

export default Home;
