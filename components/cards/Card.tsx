import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from "next/image";

const Card = ({ title, desc, img }:{title:string,desc:string,img:string}) => {
  return (
    <div className="card-style2 border-t-4 border-t-[#272A3C]  rounded-lg font-sans w-[90%] lg:w-[45%] flex-shrink-0 ">
            <div>
          {/* image */}
          <Image
            src={img}
            className="h-12 w-12 md:h-16 md:w-16"
            alt="developer"
            width={100}
            height={100}
          />
        </div>
      <div className="flex flex-col items-start justify-center space-x-0 md:flex-row md:items-center md:space-x-3">
  
        <div>
          {/* heading */}
          <h3 className="text-[24px] font-semibold text-white">
            {title}
          </h3>
          {/* paragraph */}
          <p className="text-[14px] md:text-[16px]  font-light text-wrap text-purple-1 ">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
