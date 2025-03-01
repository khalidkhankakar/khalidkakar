import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import DevStack from "@/components/DevStack";
import HeroSection from "@/components/HeroSection";
import { BoxReveal } from "@/components/magicui/box-reveal";
import Project from "@/components/Project";
import { Timeline } from "@/components/ui/timeline";
import Work from "@/components/Work";
import { title } from "process";

{/* <h3 className=" block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500"></h3> */}
const TIMELINE_DATA = [
  {
    title:( <BoxReveal boxColor={"#12fc37"} duration={0.5}>
            <h2 className="h2-bold mb-4 text-left text-white">
              Explore <span className="text-green-1 font-lobster">Khalid&apos;s journey</span>
            </h2>
          </BoxReveal>),
    content: <About />
  },
  {
    title: (      <BoxReveal boxColor={"#da1beb"} duration={0.5}>
      <h2 className="h2-bold mb-4 text-left text-white">
        My <span className="text-pink-1 font-lobster">Work Experience</span>
      </h2>
    </BoxReveal>),
    content: <Work />
  },
  {
    title: (      <BoxReveal boxColor={"#00fcce"} duration={0.5}>
            <h2 className="h2-bold mb-4 text-left text-white">
              Latest <span className="text-cyan-1 font-lobster">Blog Post</span>
            </h2>
          </BoxReveal>),
    content: <Blog />
  },
  {
    title: ( <BoxReveal boxColor={"#f4ac24"} duration={0.5}>
      <h2 className="h2-bold mb-4 text-left text-white">
        My <span className="text-orange-1 font-lobster">Dev Stack</span>
      </h2>
      </BoxReveal>),
    content: <DevStack />
  },
  
  {
    title: (
      <BoxReveal boxColor={"#da1beb "} duration={0.5}>
              <h2 className="h2-bold mb-4 text-left text-white">
                My <span className="text-pink-1 font-lobster">Projects</span>
              </h2>
            </BoxReveal>
    ),
    content: <Project />
  },
  
  {
    title: (
      <BoxReveal boxColor={"#da1beb "} duration={0.5}>
      <h2 className="h2-bold mb-4 text-left text-white">
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
      {/* <About />
      <Work />
      <Blog />
      <DevStack />
      <Project />
      <Contact /> */}
      <Timeline data={TIMELINE_DATA} />
    </main>
  );
};

export default Home;
