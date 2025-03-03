'use client';
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { useRouter } from "next/navigation";

const Button = ({ href, label }: { href: string; label: string }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <InteractiveHoverButton onClick={handleClick}  >
      {label}
    </InteractiveHoverButton>
  );
};

export default Button;
