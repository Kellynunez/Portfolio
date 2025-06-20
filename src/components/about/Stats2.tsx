import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillSmile, AiFillSetting, AiFillEdit } from "react-icons/ai";

export const Stats2 = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8">
        <Reveal>
          <div>
            <h4 className="flex items-center mb-6">
              <AiFillSetting className="text-[#00FF85] text-2xl" />
              <span className="font-bold ml-2">Entorno y construcción</span>
            </h4>
            <div className="flex flex-wrap gap-2 mb-12">
            <Chip>JekyllRB</Chip>
            <Chip>NodeJS</Chip>
            <Chip>Linux</Chip>
            <Chip>Git</Chip>
            <Chip>GitHub</Chip>
            <Chip>Netlify</Chip>
            <Chip>Sanity</Chip>
            <Chip>Webflow</Chip>
            <Chip>Wordpress</Chip>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div>
            <h4 className="flex items-center mb-6">
              <AiFillSmile className="text-[#00FF85] text-2xl" />
              <span className="font-bold ml-2">IA y asistentes creativos</span>
            </h4>
            <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Adobe Firefly</Chip>
            <Chip>Midjourney</Chip>
            <Chip>Copilot</Chip>
            <Chip>Cursor</Chip>
            <Chip>DeepSeek</Chip>
            <Chip>ChatGPT</Chip>
            <Chip>Gemini</Chip>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div>
            <h4 className="flex items-center mb-6">
              <AiFillEdit className="text-[#00FF85] text-2xl" />
              <span className="font-bold ml-2">Productividad y gestión</span>
            </h4>
            <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Notion</Chip>
            <Chip>Jira</Chip>
            <Chip>Confluence</Chip>
            <Chip>Trello</Chip>
            <Chip>ClickUp</Chip>
            <Chip>Airtable</Chip>
            <Chip>Microsoft Office</Chip>
            <Chip>Google Workspace</Chip>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
