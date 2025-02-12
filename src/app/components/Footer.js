import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#02215c] text-white pb-6 pt-14 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-12 gap-6">

        {/* Center Section: Certifications */}
        <div className="col-span-12 md:col-span-8 md:mt-0">
          <h4 className="font-semibold text-[#bdedff] text-2xl mb-2">Certifications:</h4>
          <div className="flex flex-wrap gap-2">
            <div className="bg-white border-2 border-gray-800 rounded">
                <Image src="/images/partner/adobe.png" alt="adobe" width={140} height={72} />
            </div>
            <div className="bg-white border-2 border-gray-800 rounded">
                <Image src="/images/partner/atlassian.png" alt="atlassian" width={140} height={72} />
            </div>
            <div className="bg-white border-2 border-gray-800 rounded">
                <Image src="/images/partner/aws.png" alt="aws" width={140} height={72} />
            </div>
            <div className="bg-white border-2 border-gray-800 rounded">
                <Image src="/images/partner/google_cloud.png" alt="google_cloud" width={140} height={72} />
            </div>
            <div className="bg-white border-2 border-gray-800 rounded">
                <Image src="/images/partner/microsoft.png" alt="microsoft" width={140} height={72} />
            </div>
            <div className="bg-white border-2 border-gray-800 rounded">
                <Image src="/images/partner/moodle.png" alt="moodle" width={140} height={72} />
            </div>
            <div className="bg-white border-2 border-gray-800 rounded">
                <Image src="/images/partner/nopCommerce.png" alt="nopCommerce" width={140} height={72} />
            </div>
            <div className="bg-white border-2 border-gray-800 rounded">
                <Image src="/images/partner/odoo.png" alt="odoo" width={140} height={72} />
            </div>
            <div className="bg-white border-2 border-gray-800 rounded">
                <Image src="/images/partner/saleforce.png" alt="saleforce" width={140} height={72} />
            </div>
          </div>
        </div>

        {/* Right Section: Solutions Partners */}
        <div className="col-span-12 md:col-span-4 md:mt-0">
          <h4 className="font-semibold text-[#bdedff] text-2xl mb-2">Solutions Partners:</h4>
          <div className="flex flex-wrap gap-3">
            <Image className="max-h-[60] w-auto" src="/images/cirtification/iso9001.png" alt="iso9001" width={336} height={98} />
            <Image className="max-h-[60] w-auto" src="/images/cirtification/iso27001.png" alt="iso27001" width={223} height={98} />
            <Image className="max-h-[60] w-auto" src="/images/cirtification/cmmi.png" alt="CMMI" width={224} height={98} />
          </div>
        </div>
      </div>

      {/* Left Section: Copyright */}
      <div className=" text-gray-100 py-4 pt-8 text-center px-3 text-xl">
          &copy; {new Date().getFullYear()} <a href="Brainstation 23" target="__blank" className="hover:underline hover:text-white">Brainstation 23</a>. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;
