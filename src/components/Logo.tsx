import Image from "next/image";
import { SITE } from "@/lib/constants";

type LogoProps = {
  variant?: "default" | "compact";
  className?: string;
};

export function Logo({ variant = "default", className = "" }: LogoProps) {
  if (variant === "compact") {
    return (
      <Image
        src="/logo.png"
        alt={SITE.name}
        width={180}
        height={54}
        className={`h-12 w-auto object-contain scale-[1.8] origin-left ${className}`}
        priority
      />
    );
  }

  return (
    <Image
      src="/logo.png"
      alt={SITE.name}
      width={260}
      height={76}
      className={`h-12 w-auto object-contain sm:h-16 scale-[1.8] origin-left ${className}`}
      priority
    />
  );
}
