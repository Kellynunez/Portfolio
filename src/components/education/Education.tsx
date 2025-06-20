import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiFeather,
  FiAward,
  FiCalendar,
} from "react-icons/fi";
import { SectionHeader } from "../util/SectionHeader";

export const Education = () => {
  const [position, setPosition] = useState(0);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < education.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };

  return (
    <section className="section-wrapper" id="education">
      <div className="mb-8 flex justify-between gap-4">
        <SectionHeader title="Education" dir="l" />
        <div className="flex gap-2">
          <button
            className="h-fit bg-zinc-800 hover:bg-zinc-700 p-4 text-2xl text-zinc-300 transition-colors rounded-lg"
            onClick={shiftLeft}
            disabled={position === 0}
          >
            <FiChevronLeft />
          </button>
          <button
            className="h-fit bg-zinc-800 hover:bg-zinc-700 p-4 text-2xl text-zinc-300 transition-colors rounded-lg"
            onClick={shiftRight}
            disabled={position === education.length - 1}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
      <div className="flex gap-4 overflow-hidden">
        {education.map((edu, index) => (
          <EducationCard {...edu} key={index} position={position} index={index} />
        ))}
      </div>
    </section>
  );
};

const EducationCard = ({ position, index, title, institution, degree, period, description, Icon, achievements }) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",
        duration: 0.35,
      }}
      className={`relative flex min-h-[300px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-3/5 rounded-lg ${
        index % 2 ? "bg-zinc-800 text-white" : "bg-zinc-900 text-zinc-300 border border-zinc-700"
      }`}
    >
      <Icon className="absolute right-2 top-2 text-7xl opacity-20" />
      <div>
        <h3 className="mb-4 text-2xl font-bold text-[#00FF85]">{title}</h3>
        <p className="mb-2 text-lg font-semibold">{institution}</p>
        <p className="mb-2 text-sm text-zinc-400">{degree}</p>
        <div className="flex items-center gap-2 mb-4 text-sm text-zinc-400">
          <FiCalendar className="text-[#FF0099]" />
          <span>{period}</span>
        </div>
        <p className="mb-4 leading-relaxed">{description}</p>
        {achievements && achievements.length > 0 && (
          <div>
            <h4 className="mb-2 font-semibold text-[#FF0099]">Logros destacados:</h4>
            <ul className="space-y-1">
              {achievements.map((achievement, idx) => (
                <li key={idx} className="text-sm flex items-start gap-2">
                  <FiAward className="text-[#00FF85] mt-1 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const education = [
  {
    title: "Diseño Gráfico Publicitario",
    institution: "Instituto Leo Design",
    degree: "Carrera Técnica (Titulado)",
    period: "2011 - 2014",
    Icon: FiFeather,
    description:
      "Formación especializada en diseño gráfico, identidad visual y comunicación visual. Aprendizaje de herramientas de software de diseño gráfico y dibujo técnico.",
    achievements: [
      "Proyecto final destacado en identidad corporativa",
      "Liderazgo en exposiciones estudiantiles",
      "Manejo avanzado de Adobe Creative Suite"
    ]
  },
  {
    title: "Diseño Gráfico Publicitario",
    institution: "Instituto Leo Design",
    degree: "Carrera Técnica (Titulado)",
    period: "2011 - 2014",
    Icon: FiFeather,
    description:
      "Formación especializada en diseño gráfico, identidad visual y comunicación visual. Aprendizaje de herramientas de software de diseño gráfico y dibujo técnico.",
    achievements: [
      "Proyecto final destacado en identidad corporativa",
      "Liderazgo en exposiciones estudiantiles",
      "Manejo avanzado de Adobe Creative Suite"
    ]
  },
  {
    title: "Diseño Gráfico Publicitario",
    institution: "Instituto Leo Design",
    degree: "Carrera Técnica (Titulado)",
    period: "2011 - 2014",
    Icon: FiFeather,
    description:
      "Formación especializada en diseño gráfico, identidad visual y comunicación visual. Aprendizaje de herramientas de software de diseño gráfico y dibujo técnico.",
    achievements: [
      "Proyecto final destacado en identidad corporativa",
      "Liderazgo en exposiciones estudiantiles",
      "Manejo avanzado de Adobe Creative Suite"
    ]
  },
];