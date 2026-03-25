import { FaFacebook, FaGithub, FaReddit } from "react-icons/fa";
import logoImg from "../../assets/logo.png"
const Footer = () => {
    return (
        <footer className='bg-[#001931] shadow-sm'>
            <hr />
            <div className='container px-2 py-8 mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-auto h-7' src={logoImg} alt='' />
                        <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">HERO.IO</span>
                    </div>

                    <div className='flex flex-wrap justify-center mt-6 -mx-4 text-white'>
                        <a
                            href='#'
                            className='mx-4 text-sm transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Reddit'
                        >
                            {' '}
                            Home{' '}
                        </a>

                        <a
                            href='#'
                            className='mx-4 text-sm transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Reddit'
                        >
                            {' '}
                            About{' '}
                        </a>

                        <a
                            href='#'
                            className='mx-4 text-sm transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Reddit'
                        >
                            {' '}
                            Teams{' '}
                        </a>

                        <a
                            href='#'
                            className='mx-4 text-sm transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Reddit'
                        >
                            {' '}
                            Privacy{' '}
                        </a>

                        <a
                            href='#'
                            className='mx-4 text-sm transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Reddit'
                        >
                            {' '}
                            Cookies{' '}
                        </a>
                    </div>
                </div>

                <hr className='my-6 border-gray-200 md:my-10 ' />

                <div className='flex flex-col items-center sm:flex-row sm:justify-between text-white'>
                    <p className='text-sm '>
                        © 2026 Joyanta. All Rights Reserved.
                    </p>

                    <div className='flex -mx-2'>
                        <a
                            href='#'
                            className='mx-2  transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Reddit'
                        >
                            <FaReddit className='w-5 h-5 fill-current' />
                        </a>

                        <a
                            href='#'
                            className='mx-2  transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Facebook'
                        >
                            <FaFacebook className='w-5 h-5 fill-current' />
                        </a>

                        <a
                            href='#'
                            className='mx-2  transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Github'
                        >
                            <FaGithub className='w-5 h-5 fill-current' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;