import googlePlay from "../../assets/google-play.png"
import appStore from "../../assets/app-store.png"
import heroImg from "../../assets/hero.png"
import { Link } from "react-router";

const Banner = () => {
    return (
        <div className="bg-[#F5F5F5]">
            <div className="text-center container px-2 mx-auto pt-10 md:pt-20">
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold">We Build<br /> <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps</h2>
                <p className="text-[#627382] text-sm md:text-lg px-0 lg:px-80 pt-3 md:pt-5 pb-6 md:py-8">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className="flex md:flex-row items-center justify-center gap-4 pb-6 md:pb-8">
                    <Link to="https://play.google.com/store/games?hl=en">
                        <button className="btn btn-sm md:btn-lg">
                            <img className="w-5 md:w-auto" src={googlePlay} alt="google paly" />
                            <span>Google Play</span>
                        </button>
                    </Link>
                    <Link to="https://www.apple.com/app-store">
                        <button className="btn btn-sm md:btn-lg">
                            <img className="w-5 md:w-auto" src={appStore} alt="app store" />
                            <span>App Store</span>
                        </button>
                    </Link>
                </div>
                <div className="flex justify-center">
                    <img src={heroImg} alt="hero" />
                </div>
            </div>
        </div>
    );
};

export default Banner;