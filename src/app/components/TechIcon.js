import React from 'react';
import { FaDesktop, FaCloud, FaRobot, FaLink, FaPython, FaChartLine, FaEye, FaAws, FaAngular } from 'react-icons/fa';
import { IoLogoJavascript, IoCodeSlashOutline } from "react-icons/io5";
import { SiNextdotjs, SiServerless, SiFastapi, SiOllama, SiScikitlearn, SiRoboflow, SiElasticsearch, SiOpencv, SiLangchain } from "react-icons/si";
import { AiFillOpenAI, AiOutlineDotNet, AiOutlineRobot } from "react-icons/ai";
import { GiJourney, GiRoundBottomFlask} from "react-icons/gi";
import { TbBrandLaravel } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { FaFlutter } from "react-icons/fa6";
import { RiFirebaseFill, RiFlowChart } from "react-icons/ri";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { PiLineSegmentsBold } from "react-icons/pi";
import { LuDatabaseZap } from "react-icons/lu";
import { Badge } from '@/components/ui/badge';


const techIcons = {
  'Serverless': <SiServerless />,
  'Next.js': <SiNextdotjs />,
  'AWS': <FaAws />,
  'OpenAI': <AiFillOpenAI />,
  'MidJourney': <GiJourney />,
  'LangChain': <FaLink />,
  'FastAPI': <SiFastapi />,
  'PHP Laravel': <TbBrandLaravel />,
  'LlamaIndex': <SiOllama />,
  'Flask': <GiRoundBottomFlask />,
  'Azure OpenAI': <span className='flex'><VscAzure /> <AiFillOpenAI /></span>,
  'Angular': <FaAngular />,
  'Python': <FaPython />,
  'Chatbot & AI': <FaRobot />,
  'Backend: .NET Web API': <AiOutlineDotNet />,
  'Cloud & Hosting: Microsoft Azure': <FaCloud />,
  'Frontend & Mobile: Flutter': <FaFlutter />,
  'Analytics & Monitoring: Firebase Analytics': <RiFirebaseFill />,
  'Azure Machine Learning': <VscAzure />,
  'Scikit Learn': <SiScikitlearn />,
  'NLP': <AiOutlineRobot />,
  'OCR': <MdOutlineDocumentScanner />,
  'Roboflow': <SiRoboflow />,
  'Elastic Search': <SiElasticsearch />,
  'LangGraph': <FaChartLine />,
  'Crew AI': <FaRobot />,
  'JavaScript': <IoLogoJavascript />,
  'OpenCV': <SiOpencv />,
  'Object Segmentation': <PiLineSegmentsBold />,
  'Object Detection': <FaEye />,
  'Lang Chain': <SiLangchain />,
  'Information Retrieval': <RiFlowChart />,
  'Vector Database': <LuDatabaseZap />,
  'OpenAI Vision': <FaRobot />,
  'Base64': <IoCodeSlashOutline />,
  'Prompt Engineering': <FaDesktop />,
  'Vision Transformer': <FaRobot />,
};

const TechIcon = ({ iconName }) => {
  return <span className="flex items-center gap-1 text-xl transform scale-110">{techIcons[iconName]}</span> || '';
};

export default TechIcon;