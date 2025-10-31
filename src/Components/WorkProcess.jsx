import { SlArrowDown } from "react-icons/sl";
import star from "../assets/images/star.png";

function WorkProcess() {

  return (
    <>
      <div className="bg-[#FFFFF5]">
        <div className="container border-b border-gray-300 pt-28 pb-28 lg:px-16 md:px-16 px-4">
          <div className="flex gap-10 lg:flex-row flex-col justify-between items-center">
            {/* Heading and para */}
            <div className="lg:w-[60%] w-full">
              <h1 data-aos="fade-up" className="syneFont lg:text-start text-center text-black lg:text-6xl md:text-6xl text-3xl font-bold">
                <span className="flex items-baseline lg:justify-start justify-center gap-3">
                  Our high-quality{" "}
                  <img
                    className="logoSpin lg:w-[40px] lg:h-[40px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]"
                    src={star}
                    alt="star"
                  />
                </span>
                working processes
              </h1>
              <p data-aos="fade-up" className="interFont mt-7 lg:text-lg text-base lg:text-start text-center w-full">
                We focus at every stage on effective communication and
                collaboration between the client and ensuring that the final
                design meets the client's objectives and expectations.
              </p>
              <p data-aos="fade-up" className="interFont mt-5 lg:text-lg text-base lg:text-start text-center w-full">
                It is important to note that these are simplified steps, and the
                actual work process may vary depending on the complexity of the
                project.
              </p>
            </div>
            {/* Points */}
            <div data-aos="fade-up" className="lg:w-[40%] w-full">
              <details className="group rounded-2xl border-2 border-black p-6 open:bg-[#c0f444] open:border-b-4 open:border-r-4 transition-all">
                <summary className="flex justify-between items-center font-semibold text-lg cursor-pointer list-none">
                  <span className="syneFont lg:text-3xl text-2xl font-semibold">01/ Project idea</span>
                  <span className="transition-transform group-open:rotate-180">
                    <SlArrowDown className="text-xl" />
                  </span>
                </summary>
                <p className="interFont mt-4 text-base text-black">
                  The process starts with a detailed discussion with the client to
                  understand their idea & goals.
                </p>
              </details>
              <details className="group mt-5 rounded-2xl border-2 border-black p-6 open:bg-[#c0f444] open:border-b-4 open:border-r-4 transition-all">
                <summary className="flex justify-between items-center font-semibold text-lg cursor-pointer list-none">
                  <span className="syneFont lg:text-3xl text-2xl font-semibold">02/ Brainstorming</span>
                  <span className="transition-transform group-open:rotate-180">
                    <SlArrowDown className="text-xl" />
                  </span>
                </summary>
                <p className="interFont mt-4 text-base text-black">
                  Brainstorming is a group creativity technique in which members attempt to find a conclusion.
                </p>
              </details>
              <details className="group mt-5 rounded-2xl border-2 border-black p-6 open:bg-[#c0f444] open:border-b-4 open:border-r-4 transition-all">
                <summary className="flex justify-between items-center font-semibold text-lg cursor-pointer list-none">
                  <span className="syneFont lg:text-3xl text-2xl font-semibold">03/ Launch</span>
                  <span className="transition-transform group-open:rotate-180">
                    <SlArrowDown className="text-xl" />
                  </span>
                </summary>
                <p className="interFont mt-4 text-base text-black">
                  The completed design assets or final product are delivered with necessary documentation.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkProcess;
