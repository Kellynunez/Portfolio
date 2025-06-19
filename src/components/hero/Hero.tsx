import Reveal from "../util/Reveal";
import DotGrid from "./DotGrid";
import NeuFollowButton from "../buttons/NeuFollowButton";

const Hero = () => {
  return (
    <section className="text-slat-100 overflow-hidden py-24 md:py-32">
      <div className="relative">
        <div className="pointer-events-none relative z-10">
          <Reveal>
            <h1 className="pointer-events-auto text-4xl sm:text-6xl font-black text-zinc-100 md:text-8xl leading-tight pb-3">
              Hola<span className="text-[#32E01F]">,</span> soy Kelly<span className="text-[#F5F000]">.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="pointer-events-auto my-2 text-xl sm:text-2xl text-zinc-300 md:my-4 md:text-4xl">
              <span className="font-semibold animated-gradient-text">
                Diseñadora & UI/UX Front-End
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="pointer-events-auto leading-relaxed md:leading-relaxed max-w-2xl text-sm md:text-lg text-zinc-300 font-light tracking-wide">
              Profesional tech-creativa enfocada en crear experiencias digitales con identidad, usabilidad y tecnología. Integro branding estratégico y desarrollo front-end para dar vida a productos centrados en el usuario.
            </p>
          </Reveal>
          <Reveal>
            <div className="pointer-events-auto mt-10 md:mt-10">
              <NeuFollowButton
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView();
                }}
              >
                Contáctame
              </NeuFollowButton>
            </div>
          </Reveal>
        </div>
        <DotGrid />
      </div>
    </section>
  );
};

export default Hero;
