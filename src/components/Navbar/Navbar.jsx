import { Link, NavLink } from "react-router";
import logoImg from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    const links = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/apps">Apps</NavLink>
        <NavLink to="/installed">Installed</NavLink>
    </>
    return (
        <div className="bg-base-100 py-0 md:py-1 shadow-xs sticky top-0">
            <div className="navbar container mx-auto px-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold space-y-2">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="flex items-center text-sm md:text-xl cursor-pointer">
                        <img className="w-6 md:w-10" src={logoImg} alt="Logo" />
                        <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">HERO.IO</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold space-x-5">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="https://github.com/web-joyanta" className="btn btn-sm lg:btn-md bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white"><FaGithub className="text-lg" /> Contribute</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;