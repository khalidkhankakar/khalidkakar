import Link from "next/link";
import { BoxReveal } from "./magicui/box-reveal";
import { SparklesCore } from "./ui/sparkles";
import { Mails, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const Contact = () => {
  return (
    <div id="contact" className="relative m-auto my-8 flex max-w-[90vw] flex-col items-start justify-start md:max-w-2xl lg:max-w-[80vw]">
      <div className="max-w-[90vw] text-white md:max-w-2xl lg:max-w-[80vw] mx-auto">
        <h1 className="max-w-[95%] text-center text-[36px] font-semibold leading-[2.5rem] tracking-tight md:text-[48px] md:leading-[3.2rem]">
          Take Your Digital <span className="text-purple-2 font-lobster">Presence</span> to
          New Heights
        </h1>
        <p className="my-2 max-w-[95%] text-center text-[15px] font-light tracking-wide text-purple-1 md:text-[19px]">
          Get in touch to see how I can help you reach your objectives
        </p>
        <div className="mt-3 flex max-w-[95%] flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">

        
          
          <Button className="z-50 rounded-xl py-2 bg-white hover:bg-green-200 font-semibold " >
            <Link href="https://wa.me/923708218757" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-2 text-green-600 hover:underline">
            <Image src={'/icons/whatsapp.svg'} alt="whatsapp" width={20} height={20} />
              <span className="text-sm ">Whatsapp Me →</span>
            </div>
            </Link>
          </Button>

          <Button className="z-50 rounded-xl py-2 bg-white hover:bg-blue-200 font-semibold " >
            <Link href="mailto:khalidkhankakar2468@gmail.com" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-2 text-blue-600 hover:underline">
            <Image src={'/icons/gmail.svg'} alt="gmail" width={20} height={20} />
              <span className="text-sm">Mail Me →</span>
            </div>
            </Link>
          </Button>

        </div>
      </div>
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="absolute h-full w-full"
        particleColor="#FFFFFF"
      />
    </div>
  );
};

export default Contact;
