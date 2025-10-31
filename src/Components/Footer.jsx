import star from "../assets/images/star.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import arrow1 from "../assets/images/arrow1.png"
import { HiArrowRight } from "react-icons/hi";
import { TbWebhook } from "react-icons/tb";

function Footer() {
  return (
    <>
      <div className="bg-black">
        <div id="contact" className="container pt-28 pb-8 lg:px-16 md:px-16 px-4">
          <div className="flex border-b border-gray-500 pb-16 lg:items-start items-center gap-10 lg:flex-row flex-col justify-between">
            {/* Heading and contact details */}
            <div className="lg:w-[50%] w-full">
              <h1 className="syneFont lg:text-start text-center text-[#fffcf4] lg:text-6xl md:text-6xl text-3xl font-bold">
                <span className="flex items-baseline lg:justify-start justify-center gap-3">
                  Let's start a
                  <img
                    className="logoSpin lg:w-[40px] lg:h-[40px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]"
                    src={star}
                    alt="star"
                  />
                </span>
                project together
              </h1>
              <p className="interFont mt-7 text-[#fffcf4] lg:text-lg text-base lg:text-start text-center w-full">
                We work closely with our clients to understand their objectives, target audience, and unique needs. We use our creative skills to translate these requirements and practical design solutions.
              </p>
              {/* Contact Information */}
              <div className="flex lg:justify-start justify-center items-center gap-5">
                {/* Email and Phone */}
                <div>
                  <div>
                    <h1 className="interFont mt-7 font-semibold text-[#c0f444] lg:text-lg text-base lg:text-start text-center">Give us a call:</h1>
                    <h1 className="interFont text-[#fffcf4] lg:text-lg text-base lg:text-start text-center">(123) 4567898</h1>
                  </div>
                  <div>
                    <h1 className="interFont mt-5 font-semibold text-[#c0f444] lg:text-lg text-base lg:text-start text-center">Send us an email:</h1>
                    <h1 className="interFont text-[#fffcf4] lg:text-lg text-base lg:text-start text-center">contact@example.com</h1>
                  </div>
                  <div className="flex gap-3 mt-8">
                    <span className="p-2 cursor-pointer bg-black hover:bg-[#c0f444] text-[#fffcf4] hover:text-black border border-[#fffcf4] hover:border-black transition-all rounded-full"> <FaFacebookF className="text-lg" /></span>
                    <span className="p-2 cursor-pointer bg-black hover:bg-[#c0f444] text-[#fffcf4] hover:text-black border border-[#fffcf4] hover:border-black transition-all rounded-full"><RiInstagramFill className="text-lg" /></span>
                    <span className="p-2 cursor-pointer bg-black hover:bg-[#c0f444] text-[#fffcf4] hover:text-black border border-[#fffcf4] hover:border-black transition-all rounded-full"><FaLinkedinIn className="text-lg" /></span>
                    <span className="p-2 cursor-pointer bg-black hover:bg-[#c0f444] text-[#fffcf4] hover:text-black border border-[#fffcf4] hover:border-black transition-all rounded-full"><FaTwitter className="text-lg" /></span>
                  </div>
                </div>
                {/* arrow */}
                <div>
                  <img className="arrowAnim w-[200px]" src={arrow1} alt="arrow" />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-[50%] w-full lg:pl-10 pl-0">
              <h1 className="syneFont lg:text-start text-center text-[#fffcf4] text-2xl font-bold">
                Send us a message
              </h1>
              <form className="flex flex-col gap-5 mt-5">
                <input className="px-5 py-3 transition-all text-white focus:outline-none border border-gray-300 focus:border-[#c0f444] rounded-full placeholder:text-gray-300" type="text" placeholder="Your name" />
                <input className="px-5 py-3 transition-all text-white focus:outline-none border border-gray-300 focus:border-[#c0f444] rounded-full placeholder:text-gray-300" type="text" placeholder="Your email address" />
                <input className="px-5 py-3 transition-all text-white focus:outline-none border border-gray-300 focus:border-[#c0f444] rounded-full placeholder:text-gray-300" type="text" placeholder="Your number" />
                <textarea className="px-5 py-3 transition-all text-white focus:outline-none border border-gray-300 focus:border-[#c0f444] rounded-xl placeholder:text-gray-300" placeholder="Write your message here"></textarea>
                <div>
                  <button className="buttonShadow w-full flex justify-between items-center mt-5 cursor-pointer pl-10 py-1.5 border-2 border-black bg-[#c0f444] text-black font-semibold rounded-full">
                    Send message <HiArrowRight className="text-4xl p-2 mr-2 rounded-full bg-black text-[#f3f3e4]" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="flex lg:gap-0 gap-5 lg:flex-row flex-col items-center justify-between mt-7">
            {/* Logo Text */}
            <div>
              <h1 className="flex items-center gap-1 text-[#f3f3e4] lg:text-2xl md:text-lg text-lg font-bold">
                <TbWebhook className="lg:text-2xl text-lg" />
                Creative Design
              </h1>
            </div>
            <div>
              <p className="interFont text-[#8e8e8e] lg:text-base md:text-sm text-xs">© 2025 Muhammad Hassan Raza. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;