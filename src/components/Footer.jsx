import Link from '../assets/Link.png';
import { Facebook, Linkedin, Mail, MailPlus, MapPin, PhoneCall, Pin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#706FAB] font-montserrat text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0">
        
        {/* Left Section: Logo & Description */}
        <div className="w-full md:w-1/3 md:pr-10 text-center md:text-left">
          <img src={Link} alt="Foundation Logo" className="w-20 mb-4 mx-auto md:mx-0" />
          <p className="text-xs md:pr-6">
            Chris Oyakhilome Foundation International (COFI) is a global faith-based organization guided by the leadership and teachings of its visionary... 
            <span className="text-white underline cursor-pointer"> Click to Read More</span>
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-200">
              <Facebook size={20} className="text-black" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-200">
              <Linkedin size={20} className="text-black" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-200">
              <Twitter size={20} className="text-black" />
            </a>
          </div>
        </div>

        {/* Middle Section: Contact Info */}
        <div className="w-full md:w-1/3 text-xs space-y-4 text-center md:text-left">
          <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
          <p className="flex justify-center md:justify-start items-center gap-2"><MapPin className='w-5'/> 21/23 Ize Iyamu Street, Off Billings Way, Oregun,</p>
          <p className="flex justify-center md:justify-start items-center gap-2"> <Pin className='w-5'/> Ikeja, Lagos, Nigeria</p>
          <p className="flex justify-center md:justify-start items-center gap-2"><Mail className='w-5'/> contact@futureafricaleadersfoundation.org</p>
          <p className="flex justify-center md:justify-start items-center gap-2"><PhoneCall className='w-5'/> +234 703 936 3940</p>
        </div>

        {/* Right Section: Other Links */}
        <div className="w-full md:w-1/3 text-xs space-y-6 text-center md:text-left">
          <h3 className="font-semibold text-lg">Other Links</h3>
          <p><a href="#" className="text-white underline">Click to Register for Leadership Initiative Network</a></p>
          <p><a href="#" className="text-white underline">Click to watch Project Africa Videos</a></p>

          {/* Partner Button */}
          <div className="flex justify-center md:justify-start">
            <button className="bg-[#FFE161] text-black px-4 py-2 mt-4 rounded-lg flex items-center gap-2">
              PARTNER <MailPlus className="text-gray-600" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
