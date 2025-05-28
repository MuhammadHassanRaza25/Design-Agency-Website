import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { TbWebhook } from "react-icons/tb";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header Bar */}
      <div className="Header flex items-center justify-between bg-black py-5 lg:px-16 px-5 relative">
        <div className="flex gap-6 lg:gap-14 items-center">
          {/* Logo Text */}
          <div>
            <h1 className="flex items-center gap-1 text-[#f3f3e4] lg:text-2xl md:text-lg text-lg font-bold">
              <TbWebhook className="lg:text-2xl text-lg" />
              Creative Design
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-7">
            <a href="#"><p className="cursor-pointer text-[#f3f3e4] hover:text-[#EBEBD1] font-semibold">Home</p></a>
            <a href="#about"><p className="cursor-pointer text-[#f3f3e4] hover:text-[#EBEBD1] font-semibold">About Us</p></a>
            <a href="#services"><p className="cursor-pointer text-[#f3f3e4] hover:text-[#EBEBD1] font-semibold">Services</p></a>
            <a href="#projects"><p className="cursor-pointer text-[#f3f3e4] hover:text-[#EBEBD1] font-semibold">Projects</p></a>
            <a href="#contact"><p className="cursor-pointer text-[#f3f3e4] hover:text-[#EBEBD1] font-semibold">Contact Us</p></a>
          </div>
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <a href="#contact">
           <button className="buttonShadow cursor-pointer px-7 py-2 border-2 border-black bg-[#c0f444] text-black font-semibold rounded-full">
            Contact Us
           </button>
          </a>
        </div>

        {/* Mobile Button + Hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <a href="#contact">
          <button className="buttonShadow cursor-pointer px-5 py-2 border-2 border-black bg-[#c0f444] text-black font-semibold rounded-full text-sm">
            Contact
          </button>
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiX className="text-3xl cursor-pointer text-[#f3f3e4]" />
            ) : (
              <HiOutlineMenu className="text-3xl cursor-pointer text-[#f3f3e4]" />
            )}
          </button>
          
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden bg-black px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4">
          <a href="#">
          <p className="cursor-pointer text-[#f3f3e4] hover:text-[#EBEBD1] font-semibold border-b border-[#333] pb-2">
            Home
          </p>
          </a>
          <a href="#about">
          <p className="cursor-pointer text-[#f3f3e4] hover:text-[#EBEBD1] font-semibold border-b border-[#333] pb-2">
            About Us
          </p>
          </a>
          <a href="#services">
          <p className="cursor-pointer text-[#f3f3e4] hover:text-[#EBEBD1] font-semibold border-b border-[#333] pb-2">
            Services
          </p>
          </a>
          <a href="#projects">
          <p className="cursor-pointer text-[#f3f3e4] hover:text-[#EBEBD1] font-semibold border-b border-[#333] pb-2">
            Projects
          </p>
          </a>
          <a href="#contact">
          <p className="cursor-pointer text-[#f3f3e4] hover:text-[#EBEBD1] font-semibold border-b border-[#333] pb-2">
            Contact Us
          </p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
