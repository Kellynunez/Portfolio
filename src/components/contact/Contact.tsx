import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import Reveal from "../util/Reveal";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className="max-w-xl mx-auto bg-zinc-800 px-8 py-12 rounded-xl">
        <Reveal width="w-full">
          <h4 className="text-4xl md:text-5xl text-center font-black">
            Contacto<span className="text-[#00FF85]">.</span>
          </h4>
        </Reveal>
        <Reveal width="w-full">
          <p className="text-center my-8 text-zinc-300 leading-relaxed tracking-wide">
            Envíame un correo electrónico si quieres conectar! También puedes
            encontrarme en{" "}
            <Link
              href="https://www.linkedin.com/in/kellynunezh/"
              target="_blank"
              className="text-[#1E90FF] hover:underline link-with-spacing"
            >
              Linkedin
            </Link>{" "}
            or{" "}
            <Link
              href="https://wa.me/51957268339"
              target="_blank"
              className="text-[#1E90FF] hover:underline link-with-spacing"
            >
              Whatsapp
            </Link>.
          </p>
        </Reveal>
        <Reveal width="w-full">
          <Link href="mailto:kellynunezhu@gmail.com">
            <div className="flex items-center justify-center gap-2 w-fit text-lg md:text-2xl whitespace-normal mx-auto text-zinc-300 hover:text-[#1E90FF] transition-colors">
              <div className="text-[#FF0099]">
                <AiFillMail />
              </div>
              <span>kellynunezhu@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
