import { IoStarSharp } from "react-icons/io5";
import star from "../assets/images/star.png"

function Clients() {
  return (
    <>
      <div className="bg-[#FFFFF5] border-b border-gray-200 pt-28 pb-28 lg:px-16 md:px-16 px-4">
        <h1 data-aos="fade-up" className="syneFont text-center text-black lg:text-6xl md:text-6xl text-3xl font-bold">
          Clients are always
          <span className="flex items-baseline justify-center gap-3">
            satisfied with us
            <img
              className="logoSpin lg:w-[40px] lg:h-[40px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]"
              src={star}
              alt="star"
            />
          </span>
        </h1>

          {/* Cards Div 1 */}
          <div className="flex lg:flex-row flex-col lg:gap-0 gap-8 justify-between mt-16">
              <div className="clientCardBorder lg:w-[49%] w-full border-2 border-black rounded-2xl p-8">
                 <span className="flex gap-2"><IoStarSharp className="text-4xl" /><IoStarSharp className="text-4xl" /><IoStarSharp className="text-4xl" /><IoStarSharp className="text-4xl" /><IoStarSharp className="text-4xl" /></span>
                 <h1 className="syneFont mt-8 text-3xl font-semibold">Super customer service!</h1>
                 <p className="interFont mt-4 mb-8 text-lg">Excellent customer service and I was really impressed and happy with my purchase especially as it was a last minute order which got to me in time, and when it arrived I was very happy with the design and size and so was the recipient.</p>
                 <div className="flex gap-5 items-center">
                   <img className="rounded-full w-[60px] border-2 border-black" src="https://img.freepik.com/premium-photo/passport-photo-man-caucasian-businessman-professional-attire-with-smile_817921-61353.jpg" alt="image" />
                    <h1 className="interFont text-lg"><span className="font-semibold">Smith Align</span> Businessman</h1>
                 </div>
              </div>
              <div className="clientCardBorder lg:w-[49%] w-full border-2 border-black rounded-2xl p-8">
                 <span className="flex gap-2"><IoStarSharp className="text-4xl" /><IoStarSharp className="text-4xl" /><IoStarSharp className="text-4xl" /><IoStarSharp className="text-4xl" /><IoStarSharp className="text-4xl" /></span>
                 <h1 className="syneFont mt-8 text-3xl font-semibold">Exceptional creativity and vision</h1>
                 <p className="interFont mt-4 mb-8 text-lg">Working Hassan was a game-changer for our brand. Their exceptional creativity & vision breathed new life into our visual. The logo they perfectly captures our essence & has become instantly recognizable.</p>
                 <div className="flex gap-5 items-center">
                   <img className="rounded-full w-[60px] border-2 border-black" src="https://img.freepik.com/premium-photo/passport-photo-portrait-young-man-white-background_1028938-330506.jpg" alt="image" />
                    <h1 className="interFont text-lg"><span className="font-semibold">William Jack</span> Founder@XYZ</h1>
                 </div>
              </div>
          </div>   

          {/* Cards Div 2 */}
          <div className="flex lg:flex-row flex-col lg:gap-0 gap-8 justify-between mt-8">
              <div className="clientCardBorder lg:w-[49%] w-full border-2 border-black rounded-2xl p-8">
                 <span className="flex gap-2"><IoStarSharp className="text-4xl" /><IoStarSharp className="text-4xl" /><IoStarSharp className="text-4xl" /><IoStarSharp className="text-4xl" /><IoStarSharp className="text-4xl" /></span>
                 <h1 className="syneFont mt-8 text-3xl font-semibold">Innovative and professional</h1>
                 <p className="interFont mt-4 mb-8 text-lg">I can't say enough good things about them. Their team is not only incredibly talented but also highly professional. They listened to our ideas and brought to life in ways we couldn't have imagined. Their innovative approach and dedication to our project.</p>
                 <div className="flex gap-5 items-center">
                   <img className="rounded-full w-[60px] border-2 border-black" src="https://t3.ftcdn.net/jpg/00/75/33/10/360_F_75331081_axIcnWZnT1RbSsPGlgLQaCftelG158KV.jpg" alt="image" />
                    <h1 className="interFont text-lg"><span className="font-semibold">Elizabeth Monroe</span> Creative Director</h1>
                 </div>
              </div>
              <div className="clientCardBorder lg:w-[49%] w-full border-2 border-black rounded-2xl p-8">
                 <span className="flex gap-2"><IoStarSharp className="text-4xl" /><IoStarSharp className="text-4xl" /><IoStarSharp className="text-4xl" /><IoStarSharp className="text-4xl" /><IoStarSharp className="text-4xl" /></span>
                 <h1 className="syneFont mt-8 text-3xl font-semibold">Transformed our brand</h1>
                 <p className="interFont mt-4 mb-8 text-lg">Our partnership with Hassan transformed our brand from ordinary to extraordinary. Their branding expertise and design work elevated our marketing materials to a whole new level. Our customers have taken notice, and boost in brand recognition.</p>
                 <div className="flex gap-5 items-center">
                   <img className="rounded-full w-[60px] border-2 border-black" src="https://img.freepik.com/free-photo/portrait-smiling-charming-young-man-grey-t-shirt-standing-against-plain-background_23-2148213406.jpg?semt=ais_hybrid&w=740" alt="image" />
                    <h1 className="interFont text-lg"><span className="font-semibold">Jason Clark</span> Marketing Director</h1>
                 </div>
              </div>
          </div>        
      </div>

      {/* Slide */}
      <div className="bg-black p-5">
         <div className="marquee-wrapper">
           <div className="marquee-content">
              <h1 className="syneFont font-bold uppercase flex gap-5 items-center lg:text-3xl md:text-4xl text-3xl text-[#BFF747]">            
                <img className="logoSpin lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]" src={star} alt="star"/> 
                Let's create new experiences
              </h1>
              <h1 className="syneFont font-bold uppercase flex gap-5 items-center lg:text-3xl md:text-4xl text-3xl text-[#BFF747]">            
                <img className="logoSpin lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]" src={star} alt="star"/> 
                Let's create new experiences
              </h1>
              <h1 className="syneFont font-bold uppercase flex gap-5 items-center lg:text-3xl md:text-4xl text-3xl text-[#BFF747]">            
                <img className="logoSpin lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]" src={star} alt="star"/> 
                Let's create new experiences
              </h1>
              <h1 className="syneFont font-bold uppercase flex gap-5 items-center lg:text-3xl md:text-4xl text-3xl text-[#BFF747]">            
                <img className="logoSpin lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]" src={star} alt="star"/> 
                Let's create new experiences
              </h1>
              <h1 className="syneFont font-bold uppercase flex gap-5 items-center lg:text-3xl md:text-4xl text-3xl text-[#BFF747]">            
                <img className="logoSpin lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]" src={star} alt="star"/> 
                Let's create new experiences
              </h1>
              <h1 className="syneFont font-bold uppercase flex gap-5 items-center lg:text-3xl md:text-4xl text-3xl text-[#BFF747]">            
                <img className="logoSpin lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]" src={star} alt="star"/> 
                Let's create new experiences
              </h1>
              <h1 className="syneFont font-bold uppercase flex gap-5 items-center lg:text-3xl md:text-4xl text-3xl text-[#BFF747]">            
                <img className="logoSpin lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]" src={star} alt="star"/> 
                Let's create new experiences
              </h1>
              <h1 className="syneFont font-bold uppercase flex gap-5 items-center lg:text-3xl md:text-4xl text-3xl text-[#BFF747]">            
                <img className="logoSpin lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]" src={star} alt="star"/> 
                Let's create new experiences
              </h1>
              <h1 className="syneFont font-bold uppercase flex gap-5 items-center lg:text-3xl md:text-4xl text-3xl text-[#BFF747]">            
                <img className="logoSpin lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]" src={star} alt="star"/> 
                Let's create new experiences
              </h1>
              <h1 className="syneFont font-bold uppercase flex gap-5 items-center lg:text-3xl md:text-4xl text-3xl text-[#BFF747]">            
                <img className="logoSpin lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]" src={star} alt="star"/> 
                Let's create new experiences
              </h1>
           </div>
         </div>
      </div>
    </>
  );
}

export default Clients;
