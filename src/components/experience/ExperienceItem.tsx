import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";

interface Props {
  title: string;
  position: string;
  time: string;
  mode: string;
  location: string;
  description: string;
  tech: string[];
}

// Función para obtener el emoji de la bandera basado en la ubicación
const getFlagEmoji = (location: string): string => {
  const locationLower = location.toLowerCase();
  
  if (locationLower.includes('perú') || locationLower.includes('peru') || locationLower.includes('lima')) {
    return '🇵🇪';
  }
  if (locationLower.includes('usa') || locationLower.includes('austin') || locationLower.includes('mountain view')) {
    return '🇺🇸';
  }
  if (locationLower.includes('global')) {
    return '🌍';
  }
  
  // Por defecto, si no se encuentra una coincidencia específica
  return '📍';
};

export const ExperienceItem = ({
  title,
  position,
  mode,
  time,
  location,
  description,
  tech,
}: Props) => {
  const flagEmoji = getFlagEmoji(location);
  
  return (
    <div className="mb-6 border-b pb-6 border-zinc-700">
      <div className="flex items-center justify-between mb-2">
        <Reveal>
          <div className="flex items-center">
            <span className="font-bold text-xl">{title}</span> 
            <span className="text-zinc-400 ml-2 text-xl">
              {flagEmoji}
            </span>
          </div>
        </Reveal>
        <Reveal>
          <span>{time}</span>
        </Reveal>
      </div>

      <div className="flex items-center justify-between mb-4">
        <Reveal>
          <span className="text-[#00FF85] font-bold">{position}</span>
        </Reveal>
        <Reveal>
          <span className="text-[#FF0099]">{mode}</span>
        </Reveal>
      </div>
      <Reveal>
        <p className="mb-6 text-zinc-300 leading-relaxed">{description}</p>
      </Reveal>
      <Reveal>
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
