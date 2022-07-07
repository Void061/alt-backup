import { useState, useEffect } from "react";
import Link from "next/link";
import Icon from "./Icon";

function NavLink({ to, children, className }) {
    return (
        <a href={to} className={`${className ? className : "px-[30px]"}`}>
            {children}
        </a>
    );
}

function MobileNav({ open, setOpen }) {
    return (
        <div
            className={`md:hidden absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
        >
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
                {" "}
                {/*logo container*/}
                <Link legacyBehavior className="text-xl" href="/">
                    ALTERA
                </Link>
            </div>
            <div className="flex flex-col ml-4 pt-5 text-[25px]">
                <Link legacyBehavior
                    href="/about"

                >
                    <span onClick={() =>
                        setTimeout(() => {
                            setOpen(!open);
                        }, 100)
                    }>About</span>
                </Link>
                <Link legacyBehavior
                    href="/contact"

                >
                    <span onClick={() =>
                        setTimeout(() => {
                            setOpen(!open);
                        }, 100)
                    }>Contact</span>
                </Link>
            </div>
        </div>
    );
}

export default function Header(props) {
    const position = props.position == "fixed" ? true : false;
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const [open, setOpen] = useState(false);
    return (
        <nav
            className={`flex filter ${position ? "position-fixed" : ""} drop-shadow-md ${scrollY > 0 ? "bg-primary" : "bg-none"} px-4 py-4 h-20 items-center `}
        >
            <div className="container mx-auto flex">
                <MobileNav open={open} setOpen={setOpen} />
                <div className="w-3/12 flex items-center">
                    <Link legacyBehavior href="/">
                        <a className={`text-2xl md:text-[35px] font-bold `}><img src={scrollY > 0 ? "/images/logo-white.png" : "/images/logo-white.png"} width="200px" /></a>
                    </Link>
                </div>
                <div className="w-9/12 flex justify-end items-center">
                    <div
                        className="z-50 flex relative w-7 h-5 flex-col justify-between items-center md:hidden"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        {/* hamburger button */}
                        <span
                            className={`h-[2px] w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "bg-[#001d4f] rotate-45 translate-y-2.5" : ""
                                }`}
                        />
                        <span
                            className={`h-[2px] w-full  bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "bg-[#001d4f] w-0" : "w-full"
                                }`}
                        />
                        <span
                            className={`h-[2px] w-full  bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "bg-[#001d4f] -rotate-45 -translate-y-2.5" : ""
                                }`}
                        />
                    </div>

                    <div className={`hidden md:flex  d-flex items-center text-[18px]  `}>
                        {props.Home ? <NavLink to="#about">Chi siamo</NavLink> : <NavLink to="/#about">Chi siamo</NavLink>}
                        {props.Home ? <NavLink to="#services">Servizi</NavLink> : <NavLink to="/#services">Servizi</NavLink>}
                        <NavLink to="/category">Blog</NavLink>
                        {props.Home ? <NavLink to="#contact" className="duration-200 border border-white hover:bg-white hover:text-primary py-[20px] ml-[30px] px-[40px] rounded-[10px]">Contattaci</NavLink> : <NavLink to="/#contact">Contattaci</NavLink>}

                    </div>
                </div>
            </div>
        </nav>
    );
}
