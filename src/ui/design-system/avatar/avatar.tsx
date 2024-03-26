import Image from "next/image";
import clsx from "clsx";

interface Props {
    size?: "small" | "medium" | "large" ;
    src: string;
    alt: string;
  }
  
  export const Avatar = ({ size = "medium", src, alt}: Props) => {
    let sizeStyles: string;
  
    switch (size) {
     
      case "small":
        sizeStyles = "w-[24px] h-[24px]";
        break;
  
      case "medium":
        sizeStyles = "w-[34px] h-[34px]";
        break;
  
      case "large":
        sizeStyles = "w-[50px] h-[50px]";
        break;
    }
    return (
      <div className={clsx(sizeStyles, "bg-gray-600 rounded-full relative")}>
        <Image
        fill
        src={src}
        alt={src}
        //width={50}
        //height={50} 
        className="object-cover object-center rounded-full"
    />
      </div>
    );
  };
  