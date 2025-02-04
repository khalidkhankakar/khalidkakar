import Image from "next/image";
import "./comp.css";

const TechCard = ({ name, img }: { name: string; img: string }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-0">
      <div className="block-container h-[55px] w-[55px] md:h-[85px] md:w-[85px]">
        <div className="btn-back btn-back-1 rounded-xl md:rounded-2xl"></div>
        <div className="btn-front rounded-xl md:rounded-2xl">
          <Image
            src={img}
            alt={name}
            width={100}
            height={100}
            className="img"
          />
        </div>
      </div>
      <p className="text-[12px] font-light tracking-wide text-purple-1 md:text-[16px] ">{name}</p>
    </div>
  );
};

export default TechCard;
