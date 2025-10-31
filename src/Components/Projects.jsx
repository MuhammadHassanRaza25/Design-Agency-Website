import star from "../assets/images/star.png";
import { Carousel } from "antd";

function Projects() {
  return (
    <>
      <div className="bg-black">
        <div id="projects" className="container pt-28 pb-28 lg:px-16 md:px-16 px-4">
          <h1 data-aos="fade-up" className="syneFont text-center text-[#fffcf4] lg:text-6xl md:text-6xl text-2xl font-bold">
            Have a wide range of
            <span className="flex items-baseline justify-center gap-3">
              creative projects
              <img
                className="logoSpin lg:w-[40px] lg:h-[40px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]"
                src={star}
                alt="star"
              />
            </span>
          </h1>

          {/* Slides */}
          <div className="mx-auto lg:w-[45%] w-full mt-20">
            <Carousel autoplay>
              {/* Slide 1 */}
              <div className="relative lg:h-[450px] h-[60vh] bg-cover bg-[url('https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3JhZnRpbmd8ZW58MHx8MHx8fDA%3D')] border-2 border-[#fffcf4] rounded-2xl">
                <div className="absolute bottom-0 left-0 right-0 rounded-2xl pl-5 pr-10 pt-5 pb-8 bg-transparent backdrop-blur-xl">
                  <h1 className="syneFont font-bold lg:text-4xl text-2xl text-[#fffcf4]">Product Design</h1>
                  <p className="interFont mt-3 text-base text-[#fffcf4]">Developing the look and feel of physical products, aesthetics, and functionality.</p>
                </div>
              </div>
              {/* Slide 2 */}
              <div className="relative lg:h-[450px] h-[60vh] bg-cover bg-[url('https://odysseydigitalmedia.com/assets/project2-NsEsB0ly.png')] border-2 border-[#fffcf4] rounded-2xl">
                <div className="absolute bottom-0 left-0 right-0 rounded-2xl pl-5 pr-10 pt-5 pb-8 bg-transparent backdrop-blur-xl">
                  <h1 className="syneFont font-bold lg:text-4xl text-2xl text-[#fffcf4]">Logo and Branding</h1>
                  <p className="interFont mt-3 text-base text-[#fffcf4]">Creating or refreshing a company's logo and developing a cohesive visual identity.</p>
                </div>
              </div>
              {/* Slide 3 */}
              <div className="relative lg:h-[450px] h-[60vh] bg-cover bg-[url('https://img.freepik.com/photos-premium/conception-interface-utilisateur_1197721-78019.jpg?semt=ais_hybrid&w=740')] border-2 border-[#fffcf4] rounded-2xl">
                <div className="absolute bottom-0 left-0 right-0 rounded-2xl pl-5 pr-10 pt-5 pb-8 bg-transparent backdrop-blur-xl">
                  <h1 className="syneFont font-bold lg:text-4xl text-2xl text-[#fffcf4]">App UI/UX Design</h1>
                  <p className="interFont mt-3 text-base text-[#fffcf4]">Designing the UI/UX for mobile apps and web appliactions to ensure usablity and engagement.</p>
                </div>
              </div>
              {/* Slide 4 */}
              <div className="relative lg:h-[450px] h-[60vh] bg-cover bg-[url('https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1702539263/catalog/1735200254209130496/reh1hl4treumasfd6wwh.jpg')] border-2 border-[#fffcf4] rounded-2xl">
                <div className="absolute bottom-0 left-0 right-0 rounded-2xl pl-5 pr-10 pt-5 pb-8 bg-transparent backdrop-blur-xl">
                  <h1 className="syneFont font-bold lg:text-4xl text-2xl text-[#fffcf4]">Packaging Design</h1>
                  <p className="interFont mt-3 text-base text-[#fffcf4]">Creating packaging solutions for products that not only protect attract customers on store.</p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
