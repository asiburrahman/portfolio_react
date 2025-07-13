import { FaDownload, FaHome, FaUser, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";
import Theme from "./Theme";

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};


const link = <>

    <li><button onClick={() => scrollToSection("hero")} className="flex items-center gap-1">
        <FaHome />Home
    </button></li>
    <li><button onClick={() => scrollToSection("about")} className="flex items-center gap-1">
        <FaUser />About            </button></li>
    <li><button onClick={() => scrollToSection("contacts")} className="flex items-center gap-1">
        <FaEnvelope />Contact
    </button></li>

</>

const Navbar = () => (





    //   <div className="navbar bg-base-100 shadow-md px-4 sticky top-0 z-50 flex flex-wrap justify-between items-center">
    //     {/* Mobile: Links on left */}
    //     <div className="flex-1 md:order-2 md:flex-none">
    //       <div className="md:hidden">
    //         <ul className="menu menu-horizontal px-1 gap-4">
    //           <li>
    //             <button onClick={() => scrollToSection("hero")} className="flex items-center gap-1">
    //               <FaHome />
    //             </button>
    //           </li>
    //           <li>
    //             <button onClick={() => scrollToSection("about")} className="flex items-center gap-1">
    //               <FaUser />
    //             </button>
    //           </li>
    //           <li>
    //             <button onClick={() => scrollToSection("contacts")} className="flex items-center gap-1">
    //               <FaEnvelope />
    //             </button>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>

    //     {/* Logo */}
    //     <div className="flex-none md:flex-1 md:order-1 md:justify-start flex justify-end">
    //       <button onClick={() => scrollToSection("hero")} className="text-2xl font-bold">Asibur</button>
    //     </div>

    //     {/* Desktop: Nav Center */}
    //     <div className="hidden md:flex flex-1 justify-center">
    //       <ul className="menu menu-horizontal px-1 gap-4">
    //         <li>
    //           <button onClick={() => scrollToSection("hero")} className="flex items-center gap-1">
    //             <FaHome /> Home
    //           </button>
    //         </li>
    //         <li>
    //           <button onClick={() => scrollToSection("about")} className="flex items-center gap-1">
    //             <FaUser /> About
    //           </button>
    //         </li>
    //         <li>
    //           <button onClick={() => scrollToSection("contacts")} className="flex items-center gap-1">
    //             <FaEnvelope /> Contacts
    //           </button>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Resume button only on desktop */}
    //     <div className="hidden md:flex flex-none">
    //       <a href="/resume.pdf" download className="btn btn-outline btn-sm flex items-center gap-2">
    //         <FaDownload /> Resume
    //       </a>
    //     </div>
    //   </div>






    // Daysiui Navbar
    <>
        <div className='sticky top-0 text-white z-50 bg-primary'>

            <div className="navbar   w-11/12 mx-auto">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                  
                  <Link to='/' className="text-sm font-bold   md:text-2xl lg:text-3xl">
                  <img className='w-12 h-12 rounded-full  md:inline-block ' src='/logo.jpg' alt="" />
                  </Link> 
                  
                </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end flex gap-2">
                    <a href="/resume.pdf" download className="btn btn-outline btn-sm flex items-center gap-2">
             <FaDownload /> Resume
           </a>
           <Theme></Theme>
                </div>
            </div>
        </div>
    </>
);

export default Navbar;