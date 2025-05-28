import { GiLightBulb, GiPencilBrush } from "react-icons/gi";
import star from "../assets/images/star.png"
import { HiArrowRight } from "react-icons/hi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { PiPaintBrushBroad } from "react-icons/pi";

function Services(){
    return(
        <>
         {/* 1st  Section */}
          <div id="services" className="bg-[#FFFFF5] border-b border-gray-200 pt-28 pb-28 lg:px-16 md:px-16 px-4">
            <h1 data-aos="fade-up" className="syneFont text-center text-black lg:text-6xl md:text-6xl text-3xl font-bold">
               We provide effective
               <span className="flex items-baseline justify-center gap-3">
                design solutions <img className="logoSpin lg:w-[40px] lg:h-[40px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]" src={star} alt="star" />
               </span> 
            </h1>

            {/* Cards Div 1 */}
            <div className="flex lg:flex-row flex-col lg:gap-0 gap-8 justify-between mt-20">
                <div className="cardBorder lg:w-[49%] w-full border-2 border-black rounded-2xl p-8">
                    <span><GiPencilBrush className="text-6xl" /></span>
                    <h1 className="syneFont mt-8 text-3xl font-semibold">UI/UX Design</h1>
                    <p className="interFont mt-4 mb-8 text-lg">Focusing on user interface (UI) and user experience (UX) design enhance the usability and accessibility of digital products & app.</p>
                    <span><HiArrowRight className="text-4xl"  /></span>
                </div>
               <div className="cardBorder lg:w-[49%] w-full border-2 border-black rounded-2xl p-8">
                    <span><PiPaintBrushBroad className="text-6xl" /></span>
                    <h1 className="syneFont mt-8 text-3xl font-semibold">Graphic Design</h1>
                    <p className="interFont mt-4 mb-8 text-lg">Creating visual elements such as logos, branding materials, page layout techniques, brochures, & other marketing collateral.</p>
                    <span><HiArrowRight className="text-4xl"  /></span>
                </div>
            </div>
            {/* Cards Div 2 */}
            <div className="flex lg:flex-row flex-col lg:gap-0 gap-8 justify-between mt-8">
                <div className="cardBorder lg:w-[49%] w-full border-2 border-black rounded-2xl p-8">
                    <span><HiOutlineComputerDesktop className="text-6xl" /></span>
                    <h1 className="syneFont mt-8 text-3xl font-semibold">Web Design</h1>
                    <p className="interFont mt-4 mb-8 text-lg">Designing and developing websites to ensure they are visually look and appealing, user-friendly, and functional your website.</p>
                    <span><HiArrowRight className="text-4xl"  /></span>
                </div>
               <div className="cardBorder lg:w-[49%] w-full border-2 border-black rounded-2xl p-8">
                    <span><GiLightBulb className="text-6xl" /></span>
                    <h1 className="syneFont mt-8 text-3xl font-semibold">Motion Graphics</h1>
                    <p className="interFont mt-4 mb-8 text-lg">Creating animate graphics, videos for various purposes, including marketing and entertainment. To help sell a product or service.</p>
                    <span><HiArrowRight className="text-4xl"  /></span>
                </div>
            </div>
          </div>

          {/* 2nd Section */}
          <div id="about" className="bg-[#FFFFF5] pt-28 pb-28 lg:px-16 md:px-16 px-4">
            <div className="flex lg:gap-0 gap-5 lg:flex-row flex-col justify-between items-center">
                <div>
                   <h1 data-aos="fade-up" className="syneFont text-start text-black lg:text-6xl md:text-6xl text-3xl font-bold">
                      <span className="flex items-baseline justify-start gap-3">
                        We make your  <img className="logoSpin lg:w-[40px] lg:h-[40px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]" src={star} alt="star" />
                      </span> 
                      business stand out 
                   </h1>
                </div>
                <p data-aos="fade-up" className="interFont lg:w-[30%] lg:text-start text-center w-full text-xl">We work closely with our clients to know their objectives, target audience, unique needs, and practical design solutions.</p>
            </div>
            
            {/* Stats */}
            <div data-aos="fade-up" className="flex lg:gap-0 gap-10 lg:flex-row flex-col justify-evenly bg-black rounded-2xl py-8 mt-14">
                <div>
                    <h1 className="syneFont font-bold text-[#c0f444] text-center text-6xl">10+</h1>
                    <p className="interFont text-center font-semibold mt-3 text-[#fffcf4] text-lg">Years of experience</p>
                </div>
                <div>
                    <h1 className="syneFont font-bold text-[#c0f444] text-center text-6xl">110k</h1>
                    <p className="interFont text-center font-semibold mt-3 text-[#fffcf4] text-lg">Successful projects</p>
                </div>
                <div>
                    <h1 className="syneFont font-bold text-[#c0f444] text-center text-6xl">100%</h1>
                    <p className="interFont text-center font-semibold mt-3 text-[#fffcf4] text-lg">Client satisfaction rate</p>
                </div>
            </div>
          </div>
        </>
    )
}

export default Services;