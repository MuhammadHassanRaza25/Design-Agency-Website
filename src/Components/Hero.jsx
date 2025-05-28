import star from "../assets/images/star.png"
import '@fontsource-variable/syne';
import '@fontsource-variable/inter';
import heroImage from "../assets/images/heroimage.png"
import arrow1 from "../assets/images/arrow1.png"
import { IoMdCall } from "react-icons/io";

function Hero(){
    return(
        <>
          <div className="flex lg:gap-0 gap-14 lg:flex-row flex-col lg:items-start items-center justify-between lg:px-16 md:px-16 px-4 bg-black pt-16 pb-16">
            {/* Text Div */}
            <div className="lg:w-[550px] w-full">
               <h1 className="syneFont lg:text-start text-center text-[#f3f3e4] lg:text-7xl md:text-6xl text-4xl font-bold">
                 <span className="flex items-baseline lg:justify-start justify-center gap-3">
                   A creative <img className="logoSpin lg:w-[40px] lg:h-[40px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]" src={star} alt="star" />
                 </span> 
                 design studio
                </h1>
                <p className="interFont lg:w-[520px] w-full lg:text-start text-center text-[#f3f3e4] lg:text-xl text-lg mt-5">
                  We're a creative design studio specializing in meeting the needs of the new generation. We offer innovative and cutting-edge design solutions to help our clients stand out in today's fast-paced.          
                </p>

                {/* person images */}
                <div className="flex lg:flex-row flex-col items-center gap-5 mt-6">
                    <div className="flex gap-2">
                         <img className="w-[35px] h-[35px] rounded-full" src="https://img.freepik.com/premium-photo/passport-photo-man-caucasian-businessman-professional-attire-with-smile_817921-61353.jpg" alt="person" />
                          <img className="w-[35px] h-[35px] rounded-full" src="https://img.freepik.com/premium-photo/passport-photo-portrait-young-man-white-background_1028938-330506.jpg" alt="person" />
                         <img className="w-[35px] h-[35px] rounded-full" src="https://t3.ftcdn.net/jpg/00/75/33/10/360_F_75331081_axIcnWZnT1RbSsPGlgLQaCftelG158KV.jpg" alt="person" />
                    </div>
                    <div>
                      <h1 className="interFont text-[#f3f3e4]">Believed by more than a thousand people</h1>
                    </div>
                </div>
                
                {/* Button */}
                <div className="flex items-center lg:justify-start justify-center">
                  <div>
                     <button className="buttonShadow flex items-center mt-5 cursor-pointer pl-10 py-1 border-2 border-black bg-[#c0f444] text-black font-semibold rounded-full">
                       Book a free consulation <IoMdCall className="text-5xl p-2 ml-12 mr-2 rounded-full bg-black text-[#f3f3e4]" />
                     </button>
                  </div>
                   <div>
                     <img className="arrowAnim w-[170px]" src={arrow1} alt="arrow" />
                   </div>
                </div>
            </div>

            {/* Image Div */}
            <div data-aos="fade-up" className="border-4 border-[#f3f3e4] rounded-3xl lg:w-[350px] md:w-[350px] h-[400px]">
               <img className="rounded-3xl h-full" src={heroImage} alt="hero image" />
            </div>
          </div>
        </>
    )
}

export default Hero;