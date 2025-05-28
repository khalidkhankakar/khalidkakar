import About from "@/components/About";
import { Achievements } from "@/components/Achievement";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import DevStack from "@/components/DevStack";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";
import Work from "@/components/Work";
import { BoxReveal } from "@/components/magicui/box-reveal";
import TextGif from "@/components/ui/text-gif";
import { Timeline } from "@/components/ui/timeline";
import { gifUrls } from "@/constant";

const TIMELINE_DATA = [
  {
    id:1,
    title: (<BoxReveal boxColor={"#12fc37"} duration={0.5}>
      <h2 className="h2-bold mb-4   text-white">
        Explore <TextGif
          gifUrl={gifUrls[1]}
          text={" Khalid's journey"}
          size={'lg'}
          weight={'bold'}
          className="font-lobster"
        />
      </h2>
    </BoxReveal>),
    content: <About />
  },
  {
    id:2,
    title: (<BoxReveal boxColor={"#da1beb"} duration={0.5}>
      <h2 className="h2-bold mb-4   text-white">
        My <TextGif
          gifUrl={gifUrls[0]}
          text={" Work Experience"}
          size={'lg'}
          weight={'bold'}
          className="font-lobster"
        />
      </h2>
    </BoxReveal>),
    content: <Work />
  },
  {
    id:3,
    title: (<BoxReveal boxColor={"#00fcce"} duration={0.5}>
      <h2 className="h2-bold mb-4   text-white">
        Latest <TextGif
          gifUrl={gifUrls[2]}
          text={" Blog Post"}
          size={'lg'}
          weight={'bold'}
          className="font-lobster"
        />
      </h2>
    </BoxReveal>),
    content: <Blog />
  },
  {
    id:4,
    title: (<BoxReveal boxColor={"#f4ac24"} duration={0.5}>
      <h2 className="h2-bold mb-4   text-white">
        My <TextGif
          gifUrl={gifUrls[3]}
          text={" Dev Stack"}
          size={'lg'}
          weight={'bold'}
          className="font-lobster"
        />
      </h2>
    </BoxReveal>),
    content: <DevStack />
  },

  {
    id:5,
    title: (
      <BoxReveal boxColor={"#da1beb "} duration={0.5}>
        <h2 className="h2-bold mb-4   text-white">
          My <TextGif
          gifUrl={gifUrls[0]}
          text={" Projects"}
          size={'lg'}
          weight={'bold'}
          className="font-lobster"
        />
        </h2>
      </BoxReveal>
    ),
    content: <Project />
  },

  {
    id:6,
    title: (
      <BoxReveal boxColor={"#f4ac24 "} duration={0.5}>
        <h2 className="h2-bold mb-4   text-white">
          My <TextGif
          gifUrl={gifUrls[3]}
          text={" Achievements"}
          size={'lg'}
          weight={'bold'}
          className="font-lobster"
        />
        </h2>
      </BoxReveal>
    ),
    content: <Achievements />
  },
  {
    id:7,
    title: (
      <BoxReveal boxColor={"#da1beb "} duration={0.5}>
        <h2 className="h2-bold mb-4   text-white">
          Get <TextGif
          gifUrl={gifUrls[0]}
          text={" in Touch"}
          size={'lg'}
          weight={'bold'}
          className="font-lobster"
        />
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
