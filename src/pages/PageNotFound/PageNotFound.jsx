import { Link } from 'react-router';
import errorAppImg from '../../assets/App-Error.png';

const PageNotFound = () => {
    return (
        <div className="bg-[#F5F5F5] min-h-screen flex flex-col justify-center items-center px-2 py-16 gap-5 text-center">
            <img
                src={errorAppImg}
                alt="Error 404"
                className="w-48 md:w-72 lg:w-96 mb-6"
            />
            <h4 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-800">
                OPPS!! APP NOT FOUND
            </h4>
            <p className="text-[#627382] text-sm md:text-lg lg:text-xl mb-2 md:mb-6">
                The App you are requesting is not found on our system.  please try another apps
            </p>
            <Link to="/">
                <button className="btn btn-sm md:btn-lg px-6 py-2 md:px-8 md:py-3 text-white rounded-lg bg-linear-to-br from-[#632EE3] to-[#9F62F2] hover:scale-105 transition-transform duration-200">
                    Go Back!
                </button>
            </Link>
        </div>
    );
};

export default PageNotFound;