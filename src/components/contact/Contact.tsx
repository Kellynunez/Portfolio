import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import Reveal from "../util/Reveal";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className="max-w-xl mx-auto bg-zinc-800 px-8 py-12 rounded-xl">
        <Reveal width="w-full">
          <h4 className="text-4xl md:text-5xl text-center font-black">
            Contacto<span className="text-indigo-500">.</span>
          </h4>
        </Reveal>
        <Reveal width="w-full">
          <p className="text-center my-8 text-zinc-300 leading-relaxed">
            Envíame un correo electrónico si quieres conectar! También puedes
            encontrarme en{" "}
            <Link
              href="https://www.linkedin.com/in/kellynunezh/"
              target="_blank"
              className="text-indigo-300 hover:underline"
            >
              Linkedin
            </Link>{" "}
            or{" "}
            <Link
              href="https://wa.me/51957268339"
              target="_blank"
              className="text-indigo-300 hover:underline"
            >
              Whatsapp
            </Link>.
          </p>
        </Reveal>
        <Reveal width="w-full">
          <Link href="mailto:kellynunezhu@gmail.com">
            <div className="flex items-center justify-center gap-2 w-fit text-lg md:text-2xl whitespace-normal mx-auto hover:text-indigo-300 transition-colors">
              <AiFillMail />
              <span>kellynunezhu@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
