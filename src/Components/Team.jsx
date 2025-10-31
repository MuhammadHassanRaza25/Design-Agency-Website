import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import star from "../assets/images/star.png"
import { RiInstagramFill } from "react-icons/ri";

function Team() {
  return (
    <>
      <div className="bg-[#FFFFF5]">
        <div className="container border-b border-gray-200 pt-28 pb-28 lg:px-16 md:px-16 px-4">
          <h1 data-aos="fade-up" className="syneFont text-center text-black lg:text-6xl md:text-6xl text-3xl font-bold">
            We have a team of
            <span className="flex items-baseline justify-center gap-3">
              creative people
              <img
                className="logoSpin lg:w-[40px] lg:h-[40px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]"
                src={star}
                alt="star"
              />
            </span>
          </h1>

          {/* Team Cards */}
          <div className="flex lg:flex-row flex-col lg:gap-0 gap-8 justify-between items-center mt-16">
            {/* Card 1 */}
            <div>
              <img className="clientCardBorder border-4 w-[270px] h-[270px] rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDLQuH7XYP4nFK_XdNGe1pQSPpEEXer6ht0Q&s" alt="team" />
              <div>
                <h1 className="syneFont text-center text-3xl mt-7 font-semibold">Martine Joy</h1>
                <p className="interFont text-center text-lg mt-2">Creative Director</p>
              </div>
              <div className="flex gap-3 justify-center mt-3">
                <span className="p-1.5 cursor-pointer bg-black hover:bg-[#c0f444] text-[#fffcf4] hover:text-black border border-black transition-all rounded-full"> <FaFacebookF className="text-lg" /></span>
                <span className="p-1.5 cursor-pointer bg-black hover:bg-[#c0f444] text-[#fffcf4] hover:text-black border border-black transition-all rounded-full"><RiInstagramFill className="text-lg" /></span>
                <span className="p-1.5 cursor-pointer bg-black hover:bg-[#c0f444] text-[#fffcf4] hover:text-black border border-black transition-all rounded-full"><FaLinkedinIn className="text-lg" /></span>
              </div>
            </div>
            {/* Card 2 */}
            <div>
              <img className="clientCardBorder border-4 w-[270px] h-[270px] rounded-xl" src="https://media.istockphoto.com/id/1088909778/photo/portrait-of-handsome-smiling-young-man-studio-shot.jpg?s=612x612&w=0&k=20&c=989h9CKzvxQ7-hXUnl7sNeIjJZYkiys7re7083JT4Es=" alt="team" />
              <div>
                <h1 className="syneFont text-center text-3xl mt-7 font-semibold">Andrew Mark</h1>
                <p className="interFont text-center text-lg mt-2">Web Developer</p>
              </div>
              <div className="flex gap-3 justify-center mt-3">
                <span className="p-1.5 cursor-pointer bg-black hover:bg-[#c0f444] text-[#fffcf4] hover:text-black border border-black transition-all rounded-full"> <FaFacebookF className="text-lg" /></span>
                <span className="p-1.5 cursor-pointer bg-black hover:bg-[#c0f444] text-[#fffcf4] hover:text-black border border-black transition-all rounded-full"><RiInstagramFill className="text-lg" /></span>
                <span className="p-1.5 cursor-pointer bg-black hover:bg-[#c0f444] text-[#fffcf4] hover:text-black border border-black transition-all rounded-full"><FaLinkedinIn className="text-lg" /></span>
              </div>
            </div>
            {/* Card 3 */}
            <div>
              <img className="clientCardBorder border-4 w-[270px] h-[270px] rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzuBX0GEZ9e8nAQCVyRQ3fESWKu1WNo1Hy0BBapGBFIjcKi68bOyr4UeRc8TkSgVnjqY&usqp=CAU" alt="team" />
              <div>
                <h1 className="syneFont text-center text-3xl mt-7 font-semibold">Jack Taylor</h1>
                <p className="interFont text-center text-lg mt-2">Project Manager</p>
              </div>
              <div className="flex gap-3 justify-center mt-3">
                <span className="p-1.5 cursor-pointer bg-black hover:bg-[#c0f444] text-[#fffcf4] hover:text-black border border-black transition-all rounded-full"> <FaFacebookF className="text-lg" /></span>
                <span className="p-1.5 cursor-pointer bg-black hover:bg-[#c0f444] text-[#fffcf4] hover:text-black border border-black transition-all rounded-full"><RiInstagramFill className="text-lg" /></span>
                <span className="p-1.5 cursor-pointer bg-black hover:bg-[#c0f444] text-[#fffcf4] hover:text-black border border-black transition-all rounded-full"><FaLinkedinIn className="text-lg" /></span>
              </div>
            </div>
            {/* Card 4 */}
            <div>
              <img className="clientCardBorder border-4 w-[270px] h-[270px] rounded-xl" src="https://i.pinimg.com/originals/47/65/25/4765251694c36887e308043b798660c1.jpg" alt="team" />
              <div>
                <h1 className="syneFont text-center text-3xl mt-7 font-semibold">Adam Straw</h1>
                <p className="interFont text-center text-lg mt-2">Senior Designer</p>
              </div>
              <div className="flex gap-3 justify-center mt-3">
                <span className="p-1.5 cursor-pointer bg-black hover:bg-[#c0f444] text-[#fffcf4] hover:text-black border border-black transition-all rounded-full"> <FaFacebookF className="text-lg" /></span>
                <span className="p-1.5 cursor-pointer bg-black hover:bg-[#c0f444] text-[#fffcf4] hover:text-black border border-black transition-all rounded-full"><RiInstagramFill className="text-lg" /></span>
                <span className="p-1.5 cursor-pointer bg-black hover:bg-[#c0f444] text-[#fffcf4] hover:text-black border border-black transition-all rounded-full"><FaLinkedinIn className="text-lg" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Team;