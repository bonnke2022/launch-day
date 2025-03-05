"use client";
import logo from "@/app/assets/SCTP1.png";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src={logo}
      alt="logo"
      className="w-30 h-30"
      width={20}
      height={20}
      unoptimized
      priority
    />
  );
};

export default Logo;
