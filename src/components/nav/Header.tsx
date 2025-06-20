import Link from "next/link";
import React from "react";
import { SiBehance, SiGithub, SiInstagram, SiLinkedin, SiWhatsapp, SiGmail } from "react-icons/si";
import { OutlineButton } from "../buttons/OutlineButton";

export const Header = () => {
  return (
    <header className="group h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-zinc-900/50 backdrop-blur-md">
      <MyLinks />
      <OutlineButton onClick={() => {
        const link = document.createElement('a');
        link.href = "/cv-kellynunez-espanol.pdf";
        link.download = "cv-kellynunez-espanol.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}>
          CVitae
      </OutlineButton>
    </header>
  );
};

export const MyLinks = () => (
  <div className="flex items-center text-lg gap-4">
    <Link
      className="text-zinc-300 hover:text-[#00FF85] transition-colors"
      href="https://www.linkedin.com/in/kellynunezh/"
      target="_blank"
      rel="nofollow"
    >
      <SiLinkedin />
    </Link>
    <Link
      className="text-zinc-300 hover:text-[#00FF85] transition-colors"
      href="https://github.com/kellynunez"
      target="_blank"
      rel="nofollow"
    >
      <SiGithub />
    </Link>
    <Link
      className="text-zinc-300 hover:text-[#00FF85] transition-colors"
      href="https://www.behance.net/kellynunezh"
      target="_blank"
      rel="nofollow"
    >
      <SiBehance />
    </Link>
    <Link
      className="text-zinc-300 hover:text-[#00FF85] transition-colors"
      href="https://www.instagram.com/kellynunz"
      target="_blank"
      rel="nofollow"
    >
      <SiInstagram />
    </Link>
    <Link
      className="text-zinc-300 hover:text-[#00FF85] transition-colors"
      href="https://wa.me/51957268339"
      target="_blank"
      rel="nofollow"
    >
      <SiWhatsapp />
    </Link>
    <Link
      className="text-zinc-300 hover:text-[#00FF85] transition-colors"
      href="mailto:kellynunezhu@gmail.com"
      rel="nofollow"
    >
      <SiGmail />
    </Link>
  </div>
);
