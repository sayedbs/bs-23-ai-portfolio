"use client";

import Image from "next/image";
import { MenuTab } from "../components/MainMenuTab";


export function TabsDemo() {
  const tabs = [
    {
      title: "Computer Vision",
      value: "cv",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#22669f] to-violet-900"
            style={{backgroundImage: "url('/images/ComputerVision.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
          <h2>Computer Vission</h2>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Artificial Intelligence",
      value: "ai",
      content: (
        <div
          style={{backgroundImage: "url('/images/ai.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#031422] to-[#003a6f]">
          <h3>Artificial Intelligence</h3>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Chatbot",
      value: "ct",
      content: (
        <div
        
        style={{backgroundImage: "url('/images/chatBoot.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <h3>Chatboot</h3>
          <DummyContent />
        </div>
      ),
    }
  ];

  return (
    (<div
      className="h-[80vh] [perspective:1000px] relative b flex flex-col  mx-auto w-full  items-start justify-start mt-10">
      <MenuTab tabs={tabs} />
    </div>)
  );
}

const DummyContent = () => {
  return (
    (<Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" />)
  );
};
