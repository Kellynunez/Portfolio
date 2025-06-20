import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiPenTool,
  FiMessageSquare,
  FiAward,
  FiCalendar,
  FiVolume2,
  FiMinimize2,
  FiCode,
  FiGlobe,
  FiTag,
  FiGitPullRequest,
  FiTable,
  FiHardDrive,
  FiGrid
} from "react-icons/fi";
import { SectionHeader } from "../util/SectionHeader";

interface EducationCardProps {
  position: number;
  index: number;
  title: string;
  institution: string;
  degree: string;
  period: string;
  time: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
  achievements?: string[];
}

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

const EducationCard = ({ position, index, title, institution, degree, period, time, description, Icon, achievements }: EducationCardProps) => {
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
          <span>{period}</span> ({time})
        </div>
        <p className="mb-4 leading-relaxed">{description}</p>
        {achievements && achievements.length > 0 && (
          <div>
            <h4 className="mb-2 font-normal text-[#FF0099]">Logros destacados:</h4>
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
    title: "Comunicación y Publicidad",
    institution: "Universidad San Ignasio de Loyola (USIL)",
    degree: "Bachiller",
    period: "2021 - 2025",
    time: "5 años",
    Icon: FiVolume2,
    description:
        "Lorem ipsum...",
    achievements: [
        "Lorem ipsum...",
        "Tercio Superior"
    ]
  },
  {
    title: "Human Centered Design",
    institution: "Pontificia Universidad Católica del Perú (PUCP)",
    degree: "Especialización",
    period: "2022",
    time: "108 Horas",
    Icon: FiMinimize2,
    description:
        "Lorem ipsum...",
    achievements: [
        "Lorem ipsum...",
        "Tercio Superior"
    ]
  },
  {
    title: "Desarrollo Frontend",
    institution: "Codecademy",
    degree: "Certificados",
    period: "2021",
    time: "80 Horas",
    Icon: FiCode,
    description:
        "Aprendizaje autodidacta en JavaScript, Tailwind CSS, Jekyll.js, Netlify, Git and Github.",
    achievements: [
        "Lorem ipsum...",
        "Lorem ipsum..."
    ]
  },
  {
    title: "Inglés Comunicacional",
    institution: "Instituto Privateacher",
    degree: "Especialización",
    period: "2019 - 2020",
    time: "100 Horas",
    Icon: FiMessageSquare,
    description:
        "Aprendizaje presencial 1:1 de vocabulario y pronunciación.",
    achievements: [
        "Buena pronunciación en el idioma",
        "Fluidez en la conversación"
    ]
  },
  {
    title: "Branding y Gestión de Marca",
    institution: "Instituto Toulouse Lautrec",
    degree: "Especialización",
    period: "2019 - 2020",
    time: "100 Horas",
    Icon: FiTag,
    description:
        "Lorem ipsum...",
    achievements: [
        "Lorem ipsum...",
        "Quinto Superior"
    ]
  },
  {
    title: "Desarrollo de Aplicaciones Web",
    institution: "Udemy",
    degree: "Certificados",
    period: "2018",
    time: "40 Horas",
    Icon: FiGitPullRequest,
    description:
        "Aprendizaje autodidacta en Bootstrap, Materialize, Node.js y Vue.js.",
    achievements: [
        "Lorem ipsum...",
        "Lorem ipsum..."
    ]
  },
  {
    title: "Especialización en Diseño UI/UX",
    institution: "Instituto Toulouse Lautrec",
    degree: "Especialización",
    period: "2017",
    time: "100 Horas",
    Icon: FiTable,
    description:
        "Lorem ipsum...",
    achievements: [
        "Lorem ipsum...",
        "Quinto Superior"
    ]
  },
  {
    title: "Computación e Informática",
    institution: "Instituto Cibertec",
    degree: "Diplomado",
    period: "2016 - 2017",
    time: "18 Meses",
    Icon: FiHardDrive,
    description:
        "Lorem ipsum...",
    achievements: [
        "Lorem ipsum...",
        "Tercio Superior"
    ]
  },
  {
    title: "Diseño Web Responsive",
    institution: "Codecademy",
    degree: "Certificados",
    period: "2016",
    time: "50 Horas",
    Icon: FiGrid,
    description:
        "Aprendizaje autodidacta en HTML, CSS Intermedio, Media Queries y Javascript.",
    achievements: [
        "Buen manejo de html, css, javascript, bootstrap, etc.",
        "Personalización de estilos en las interfaces de usuario"
    ]
  },
  {
    title: "Inglés Básico, Medio y Avanzado",
    institution: "Británico",
    degree: "Certificado de Idioma Extranjero",
    period: "2015 - 2016",
    time: "1 Año 7 Meses",
    Icon: FiGlobe,
    description:
      "Formación especializada en inglés básico, intermedio y avanzado. Aprendizaje de gramática, vocabulario y pronunciación.",
    achievements: [
      "Buena pronunciación y fluidez en el idioma",
      "Buen manejo de la gramática y vocabulario"
    ]
  },
  {
    title: "Diseño Gráfico Publicitario",
    institution: "Instituto Leo Design",
    degree: "Titulado de Carrera Técnica",
    period: "2011 - 2014",
    time: "3 años",
    Icon: FiPenTool,
    description:
      "Formación especializada en diseño gráfico, identidad visual y comunicación visual. Aprendizaje de herramientas de software de diseño gráfico y dibujo técnico.",
    achievements: [
      "Proyectos destacados en identidad corporativa y liderazgo en proyectos",
      "Mención Honorífica - Quinto Superior"
    ]
  },
];