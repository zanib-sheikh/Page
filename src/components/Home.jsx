import React from 'react';
import { motion } from "framer-motion";

import Kid from '../assets/Kid.png';
import Kid2 from '../assets/Kid2.png';
import Amplitude from '../assets/Amplitude.png';
import Hellosign from '../assets/Hellosign.png';
import ghost from '../assets/ghost.png';
import Razorpay from '../assets/Razorpay.png';
import Kid3 from '../assets/Kid3.png';
import curve from '../assets/curve.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Scholarship from '../assets/scholarship.png';
import image from '../assets/image.png';
import Girl from '../assets/Girl.png';
import Union from '../assets/Union.png';
import Girl2 from '../assets/Girl2.png';
import Image1 from '../assets/Image1.png';
import image3 from '../assets/image3.png';
import Image4 from '../assets/Image4.png';
import { LayoutDashboardIcon, LayoutGrid, StarIcon, StarsIcon } from 'lucide-react';
function Home() {
  return (
    <div className="relative w-full min-h-screen">
       
      {/* Background Image (Covers Header & Navbar Too) */}
      <div 
  className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-[-1]"
  style={{ backgroundImage: `url(${Kid})` }}
></div>

<div className="absolute inset-0 bg-black/0"></div>
      
<motion.div
  initial={{ rotateY: 90, opacity: 0 }}
  whileInView={{ rotateY: 2, opacity: 1 }}
  transition={{ duration: 0.9 }}
  className="bg-transparent text-white text-center"
>
      {/* Page Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-6">
    <h1 className="text-4xl md:text-6xl lg:text-8xl font-kanit  leading-tight">
      THE FUTURE AFRICA <br className="hidden sm:block" /> LEADERS FOUNDATION
    </h1>
    <p className="mt-6 sm:px-11 px-2 text-sm sm:text-base  md:text-lg lg:text-xl max-w-4xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor praesent non 
      amet, posuere vitae sed quam semper.
    </p>
  </div>
  </motion.div>





  <motion.div 
      initial={{ x: -100, opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      transition={{ duration: 1 }}
      className="p-6 bg-transparent text-white rounded-lg"
    >
{/* Page Content */}
<div className="bg-gradient-to-r  from-[#706FAB] to-purple-300 w-full h-[350px] flex items-center pl-10 md:pl-20 lg:pl-32">
  <Swiper
    slidesPerView={1.2} /* Mobile Default */
    breakpoints={{
      640: { slidesPerView: 1.5, spaceBetween: 20 }, // Small screens
      768: { slidesPerView: 2, spaceBetween: 30 }, // Tablets
      1024: { slidesPerView: 2.8, spaceBetween: -10 }, // Desktop - Maintain old layout
    }}
    grabCursor={true} // 🔹 Enables drag/swipe on desktop
    mousewheel={{ forceToAxis: true }} // 🔹 Enables scrolling with mouse wheel
    navigation={true} // 🔹 Adds left/right arrows (optional)
    className="w-[85%] md:w-[100%]"
  >
    
    {/* Repeatable Cards */}
    {[1, 2, 3].map((index) => (
      <SwiperSlide key={index}>
        <div className="bg-[#57468B] text-white mt-48 mb-48 w-[500px] h-[200px] rounded-3xl flex items-center shadow-2xl shadow-black">
          
          {/* Image Container on Left */}
          <div className="rounded-xl w-1/2 flex justify-center">
            <img src={Scholarship} alt="Sponsorship" className="w-[200px] h-[200px] rounded-lg" />
          </div>

          {/* Text & Button on Right */}
          <div className="w-1/2 flex flex-col justify-center pl-0">
            <h2 className="text-lg font-sans">Sponsorship <br /> Opportunities</h2>
            <button className="bg-orange-500 w-[160px] hover:bg-orange-600 text-white px-4 py-2 mt-3 rounded-lg shadow-md">
              Learn More
            </button>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
</motion.div>




<motion.div
  initial={{ x: -300, rotate: 0, opacity: 0 }}
  whileInView={{ x: 0, rotate: 0, opacity: 1 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  className="bg-transparent text-white text-center"
>

    <div className="bg-[#3E034D] w-full h-[90px] flex  items-center justify-center">
<div className='flex items-center font-kanit text-2xl text-white font-bold gap-6 lg:gap-16'>
    <h1 className='flex'><img  src={Amplitude}  className=" w-8 h-6 mt-2 pr-2"  />Amplitude</h1>
    <h1 className='flex'><img  src={Hellosign}  className=" w-4 h-4 mt-2 "  />HELLOSIGN</h1>
    <h1 className='flex'><img  src={Razorpay}  className=" w-2 h-4 mt-2"  /><img  src={Razorpay}  className=" w-3 h-4 mt-2 "  />Razorpay</h1>
    <h1 className='flex'> <LayoutGrid className=" w-8 h-6 mt-2 "/>   ghost</h1>
</div>
</div></motion.div>



<div className="flex flex-col items-center py-4 min-h-screen bg-white justify-center">

  <div className="bg-white px-6 md:px-16 lg:px-24 py-4 text-black text-center mt-10 md:mt-16 mb-6 md:mb-11">
    <h1 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 md:mb-6">
      Impact Report
    </h1>
    <p className="px-4 md:px-16 lg:px-24 text-sm md:text-base">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consequatur optio, 
      in magnam qui doloribus officia quas dolorum iste voluptas reiciendis aspernatur 
      deserunt nisi, nobis eligendi cum similique ducimus sit?
    </p>
  </div>


  

  <div className="px-24 py-2 w-full text-black text-center lg:mb-32 mb-24 flex justify-center gap-8">
  
  {/* Card 1 */}
  <div className="bg-white w-72 rounded-2xl shadow-xl shadow-gray-500 overflow-hidden">
    <img src={image} alt="Card Image" className="w-full h-[230px] object-cover" />
    
    <div className="bg-[#706FAB] text-white lext-lg p-4 font-montserrat ">
      <p>Eco Friendly Bags <br/>and Baskets  A Step <br/> Towards Sustainable Living in Malawi</p>
    </div>
    <div className="bg-[#BC99C3] py-3 text-white font-bold cursor-pointer hover:bg-[#A290C5]">
      VIEW MORE
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white w-72 rounded-2xl shadow-xl shadow-gray-500 overflow-hidden">
    <img src={image} alt="Card Image" className="w-full h-[230px] object-cover" />
    
    <div className="bg-[#706FAB] text-white font-montserrat p-4 ">
      <p>Shaping Possibilities Ambassador Israel Majaks Youth Mentorship Program in South Sudan</p>
    </div>
    <div className="bg-[#BC99C3] py-3 text-white font-bold cursor-pointer hover:bg-[#A290C5]">
      VIEW MORE
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-white w-72 rounded-2xl shadow-xl shadow-gray-500 overflow-hidden">
    <img src={image} alt="Card Image" className="w-full h-[230px] object-cover" />
    
    <div className="bg-[#706FAB] text-white p-4 font-montserrat ">
      <p>Shaping Possibilities Ambassador Israel Majaks Youth Mentorship Program in South Sudan</p>
    </div>
    <div className="bg-[#BC99C3] py-3 text-white font-bold cursor-pointer hover:bg-[#A290C5]">
      VIEW MORE
    </div>
  </div>

</div> 





<motion.div
  initial={{ x: -100, rotate: 0, opacity: 0 }}
  whileInView={{ x: 0, rotate: 0, opacity: 1 }}
  transition={{ duration: 1.8, ease: "easeOut" }}
  className="bg-transparent text-white text-center"
>
<div className="w-full text-black mt-2 flex flex-col items-center justify-center">
  <h1 className="text-center font-kanit px-4 mb-8 md:mb-16 text-3xl md:text-4xl font-semibold">
    FUTURE AFRICA LEADERS FOUNDATION STAR WINNERS
  </h1>

  {/* Grid Layout for Responsive Columns */}
  <div className="flex flex-col md:flex-row gap-4 px-4 md:px-10 w-full max-w-6xl">
    
    {/* Left Column (Larger Image) */}
    <div className="relative w-full md:w-1/3 h-[320px] md:h-[495px]">
      <img src={Girl} alt="Sarah Eve" className="w-full h-full object-cover rounded-lg" />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm p-4 text-white">
        <h2 className="font-bold text-lg">Sarah Eve</h2>
        <p>How To Kickstart Your Freelancing Career?</p>
      </div>
    </div>

    {/* Right Column (2 Rows of Smaller Images) */}
    <div className="flex flex-col gap-4 w-full md:w-2/3">
      
      {/* First Row */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative w-full md:w-1/2 h-[240px]">
          <img src={Girl2} alt="Marry" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm p-4 text-white">
            <h2 className="font-bold text-lg">Marry</h2>
            <p>How To Kickstart Your Freelancing Career?</p>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 h-[240px]">
          <img src={image3} alt="Eva Floris" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm p-4 text-white">
            <h2 className="font-bold text-lg">Eva Floris</h2>
            <p>How To Kickstart Your Freelancing Career?</p>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative w-full md:w-1/2 h-[240px]">
          <img src={Image4} alt="Anna Sornio" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm p-4 text-white">
            <h2 className="font-bold text-lg">Anna Sornio</h2>
            <p>How To Kickstart Your Freelancing Career?</p>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 h-[240px]">
          <img src={Image1} alt="Alex James" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm p-4 text-white">
            <h2 className="font-bold text-lg">Alex James</h2>
            <p>How To Kickstart Your Freelancing Career?</p>
          </div>
        </div>
      </div>

    </div>

  </div>
</div>
</motion.div>




<motion.div
      className="bg-transparent text-white text-center"
      initial={{ opacity: 0, y: 50 }} // Start state (hidden & moved down)
      whileInView={{ opacity: 1, y: 0 }} // Animate when visible
      transition={{ duration: 0.2 }} // Smooth transition
    >
<div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 my-4 px-6 md:px-24 mt-16 md:mt-36">
  
  {/* Text Section (Appears first on all screen sizes) */}
  <div className="w-full md:w-1/2 text-left order-1 md:order-none">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-11">
      <span className="border-b-4 text-black border-green-500">About</span>
    </h2>
    <p className="text-gray-700 font-montserrat leading-relaxed text-sm md:text-base">
      The Future Africa Leaders Foundation is an initiative aimed at exploring and expanding the leadership potentials in Africa and for Africa. 
      It is for identifying, celebrating, and supporting young Africans who have demonstrated exemplary leadership by impacting their generation positively.<br/><br/>
      Through education, youth empowerment, and mentoring through other projects aimed at building young people and preparing them for a positive future.
    </p>
  </div>

  {/* Image Section (Appears after text on mobile) */}
  <div className="relative w-full md:w-1/2 order-2 md:order-none">
    <img src={Kid2} alt="Smiling child" className="w-full h-auto rounded-xl" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-gray-200 p-2 md:p-3 rounded-full">
        <svg className="w-8 h-8 md:w-10 md:h-10 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"></path>
        </svg>
      </div>
    </div>
  </div>

</div>
</motion.div>

<motion.div
  initial={{ scale: 0.5, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  className="bg-transparent text-white  text-center"
>
<div className="flex flex-col md:flex-row justify-between opacity-0 animate-fade-in items-center bg-[#BC99C3] text-white h-auto md:h-[280px] rounded-2xl p-6 w-full max-w-5xl mx-auto my-12 mt-24 relative">
  {/* Left Section (Text) */}
  <div className="w-full md:w-2/3 text-center md:text-left">
    <h2 className="text-2xl md:text-3xl font-kanit px-4 md:px-10 mb-4 md:mb-8 font-semibold relative">
      <span className="relative pb-4 text-white inline-block">
        Share this page
        <img 
          src={curve}
          alt="Curved underline" 
          className="absolute left-1/2 md:left-[250px] -bottom-4 -translate-x-1/2 w-[60px] md:w-[80px]" 
        />
      </span>
    </h2>
    <p className="text-sm font-montserrat px-4 md:px-10 mt-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br className="hidden md:block"/> Tortor praesent non amet.
    </p>
  </div>

  {/* Right Section (Button) */}
  <div className="w-full md:w-auto flex justify-center md:justify-end mt-4 md:mt-0 pr-0 md:pr-36">
    <button className="bg-[#E3770A] text-white px-14 md:px-20 py-3 md:py-4 rounded-lg shadow-md hover:bg-orange-800 transition">
      Share
    </button>
  </div>

  {/* Background Graphics */}
  <div className="absolute inset-0 opacity-20 pointer-events-none">
    <img src="https://th.bing.com/th/id/OIP.G3TxfBbbxUKs70QlNqN-kAHaDL?w=2000&h=857&rs=1&pid=ImgDetMain" alt="Background design" className="w-full h-full object-cover rounded-xl" />
  </div>
</div>
</motion.div>







<div className="flex flex-col md:flex-row items-center justify-between w-full mx-auto my-12 p-6 md:p-8">

  {/* Left Section (Text - Appears First on Mobile) */}
  <div className="w-full md:w-1/2 md:text-left md:pl-16 px-4 text-center order-1 md:order-none">
    <img 
      src={Union}
      alt="Student Testimonial" 
      className="w-8 mb-4 md:mb-5 h-auto rounded-lg"
    />
    <h2 className="text-3xl md:text-4xl font-bold">
      <span className="text-black">What Our People </span> <br/>
      <span className="text-green-600 underline">Saying</span>
      <span className="text-black"> About Us</span>
    </h2>
    <p className="text-gray-600 font-roboto mt-6 md:mt-8 w-full md:w-[420px] text-sm md:text-base">
      Whoa Whoa, Let Me Take Some Notes! A Wealth Of Audio Knowledge. Every Episode Is A Gem! I’ve Upped My Game Considerably Since I Started Listening. Really A Wonderful Platform For Podcasts.
    </p>
    <p className="mt-4 md:mt-6 font-roboto font-bold text-black">Scott Adams</p>
    
    {/* Star Rating */}
    <div className="flex text-blue-500 md:text-left md:item-start md:justify-start item-center justify-center mt-2">
      <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
    </div>
  </div>

  

  {/* Right Section (Image with Overlapping Square - Appears After Text on Mobile) */}
  <div className="relative w-full md:w-1/2 flex justify-center order-2 md:order-none mt-8 md:mt-0">
    <img 
      src={Kid3}
      alt="Student Testimonial" 
      className="w-64 md:w-80 h-auto"
    />
    
    {/* Overlapping Square */}
    <div className="absolute top-4 md:top-10 left-4 md:left-0 border-[10px] md:border-[12px] border-black w-[220px] md:w-[296px] h-[220px] md:h-[296px]"></div>
  </div>

</div>






<motion.div
      className="bg-transparent text-white p-2 text-center"
      initial={{ opacity: 0, y: 50 }} // Start state (hidden & moved down)
      whileInView={{ opacity: 1, y: 0 }} // Animate when visible
      transition={{ duration: 0.9 }} // Smooth transition
    >

<div className="bg-[#BC99C3] font-roboto relative p-6 md:p-12 lg:p-16 h-auto w-full max-w-5xl mt-4 mb-6 mx-auto">
  {/* Heading and Paragraph */}
  <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left lg:mb-20 mb-6">
    <h2 className="text-2xl pl-0 mt-2 lg:pl-16 md:text-3xl font-semibold text-white md:w-1/2">
      Subscribe and get <br className="hidden md:block" /> updates regularly
    </h2>
    <p className="text-white mt-5 md:mt-0 text-md md:w-1/2 lg:pr-8  pl-0">
      Rebuilt for simplicity and speed, so you can spend more time discovering and listening to great podcasts. Get all the updates of the latest podcasts.
    </p>
  </div>

  {/* Input Fields and Button */}
  <div className="relative pointer-events-auto flex flex-col md:flex-row lg:mt-34 mt-2 items-center md:items-center lg:gap-16 gap-4 md:gap-6 px-6">
    <input
      type="text"
      placeholder="Your name"
      className="p-3 rounded-md w-full md:w-1/3 border border-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
    />
    <input
      type="email"
      placeholder="Your email address"
      className="p-3 rounded-md w-full md:w-1/3 border border-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
    />
    <button className="bg-[#706FAB] text-white px-6 py-2 rounded-lg w-full md:w-auto hover:bg-purple-500 focus:ring-2 focus:ring-purple-300">
      Subscribe
    </button>
  </div>
</div>
</motion.div>











</div>





    </div>
  );
}

export default Home;
