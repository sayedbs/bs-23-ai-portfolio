import React from 'react';
import { FaDesktop, FaCloud, FaRobot, FaLink, FaPython, FaChartLine, FaEye, FaAws, FaAngular, FaBitbucket, FaReact } from 'react-icons/fa';
import { IoLogoJavascript, IoCodeSlashOutline, IoLogoFirebase } from "react-icons/io5";
import { SiNextdotjs, SiServerless, SiFastapi, SiOllama, SiScikitlearn, SiRoboflow, SiElasticsearch, SiOpencv, SiLangchain } from "react-icons/si";
import { AiFillOpenAI, AiOutlineDotNet, AiOutlineRobot } from "react-icons/ai";
import { GiJourney, GiRoundBottomFlask} from "react-icons/gi";
import { TbBrandLaravel } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { FaFlutter } from "react-icons/fa6";
import { RiFirebaseFill, RiFlowChart } from "react-icons/ri";
import { MdOutlineDocumentScanner, MdOutlineScreenSearchDesktop } from "react-icons/md";
import { PiLineSegmentsBold } from "react-icons/pi";
import { LuDatabaseZap } from "react-icons/lu";
import { DiMsqlServer , DiDotnet} from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { CiRoute } from "react-icons/ci";
import { BsVirus } from "react-icons/bs";

const techIcons = {
  'Chatbot & AI: OpenAI (GenAI)': <FaRobot style={{ color: '#3E4CDB' }} />,
  'Analytics & Monitoring: Firebase Analytics, Crashlytics': <IoLogoFirebase style={{ color: '#DD2C00' }} />,
  '.Net': <DiDotnet style={{ color: '#4E2ACF' }} />,
  'Faiss': <BsVirus style={{ color: '#F8155F' }} />,
  'Semantic Routing': <CiRoute style={{ color: '#E91E62' }} />,
  'Postgres': <BiLogoPostgresql style={{ color: '#31648C' }} />,
  'React.js': <FaReact style={{ color: '#5ED2F3' }} />,
  'S3 Bucket': <FaBitbucket style={{ color: '#DA5041' }} />,
  'SQL Server': <DiMsqlServer style={{ color: '#CC2927' }} />,
  'MS SQL Server': <DiMsqlServer style={{ color: '#CC2927' }} />,
  'Microsoft SQL Server': <DiMsqlServer style={{ color: '#CC2927' }} />,
  'Google Search API': <MdOutlineScreenSearchDesktop style={{ color: '#4285F4' }} />,
  'Serverless': <SiServerless style={{ color: '#FD5750' }} />,
  'Next.js': <SiNextdotjs style={{ color: '#0592E2' }} />,
  'AWS': <FaAws style={{ color: '#1391BD' }} />,
  'OpenAI': <AiFillOpenAI style={{ color: '#159D7E' }} />,
  'MidJourney': <GiJourney style={{ color: '#000000' }} />,
  'LangChain': <FaLink style={{ color: '#2B6CB0' }} />,
  'FastAPI': <SiFastapi style={{ color: '#009688' }} />,
  'PHP Laravel': <TbBrandLaravel style={{ color: '#FF2D20' }} />,
  'LlamaIndex': <SiOllama style={{ color: '#FF6F61' }} />,
  'Flask': <GiRoundBottomFlask style={{ color: '#F0211D' }} />,
  'Azure OpenAI': <span className='flex' style={{ color: '#159D7E' }}><VscAzure /> <AiFillOpenAI /></span>,
  'Angular': <FaAngular style={{ color: '#DD0031' }} />,
  'Python': <FaPython style={{ color: '#3B78A8' }} />,
  'Chatbot & AI': <FaRobot style={{ color: '#FF9900' }} />,
  'Backend: .NET Web API': <AiOutlineDotNet style={{ color: '#512BD4' }} />,
  'Cloud & Hosting: Microsoft Azure': <FaCloud style={{ color: '#0078D4' }} />,
  'Frontend & Mobile: Flutter': <FaFlutter style={{ color: '#02569B' }} />,
  'Analytics & Monitoring: Firebase Analytics': <RiFirebaseFill style={{ color: '#FFCA28' }} />,
  'Azure Machine Learning': <VscAzure style={{ color: '#0078D4' }} />,
  'Scikit Learn': <SiScikitlearn style={{ color: '#F7931E' }} />,
  'NLP': <AiOutlineRobot style={{ color: '#FF9900' }} />,
  'OCR': <MdOutlineDocumentScanner style={{ color: '#4285F4' }} />,
  'Roboflow': <SiRoboflow style={{ color: '#FF6F61' }} />,
  'Elastic Search': <SiElasticsearch style={{ color: '#005571' }} />,
  'LangGraph': <FaChartLine style={{ color: '#2B6CB0' }} />,
  'Crew AI': <FaRobot style={{ color: '#FF9900' }} />,
  'JavaScript': <IoLogoJavascript style={{ color: '#428FE8' }} />,
  'OpenCV': <SiOpencv style={{ color: '#5C3EE8' }} />,
  'Object Segmentation': <PiLineSegmentsBold style={{ color: '#FF6F61' }} />,
  'Object Detection': <FaEye style={{ color: '#4285F4' }} />,
  'Lang Chain': <SiLangchain style={{ color: '#2B6CB0' }} />,
  'Information Retrieval': <RiFlowChart style={{ color: '#2B6CB0' }} />,
  'Vector Database': <LuDatabaseZap style={{ color: '#FF6F61' }} />,
  'OpenAI Vision': <FaRobot style={{ color: '#412991' }} />,
  'Base64': <IoCodeSlashOutline style={{ color: '#0090CF' }} />,
  'Prompt Engineering': <FaDesktop style={{ color: '#0090CF' }} />,
  'Vision Transformer': <FaRobot style={{ color: '#FF9900' }} />,
};

const TechIcon = ({ iconName,className="" }) => {
  return <span className={`flex items-center gap-1 text-xl transform scale-110 transition-all ${className}`}>{techIcons[iconName]}</span> || '';
};

export default TechIcon;