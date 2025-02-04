import { FaRegCircle } from "react-icons/fa";
import Image from "next/image";

const Line = () => {
  return (
    <div className="relative z-20">
      <div className="absolute left-3 top-[22rem] flex flex-col items-center space-y-1 md:left-12 md:top-80 lg:top-72">
        <FaRegCircle className="h-4 w-4 text-white" />
        <div className="h-52 w-1 bg-gradient-to-b from-dark-3 to-[#0619C8]" />
        <Image
          src={"/icons/code.svg"}
          className="h-7 w-7 text-white"
          width={50}
          height={50}
          alt="icon"
        />
        <div className="h-52 w-1 bg-white" />
      </div>
    </div>
  );
};

export default Line;
