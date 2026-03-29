import { FaStar } from "react-icons/fa";
import { GoDownload } from "react-icons/go";

const InstalledAppCard = ({ app }) => {
    return (
        <div className="bg-white p-4 shadow rounded-sm">
            {/* Mobile + Tablet + Desktop Container */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                {/* App Info Section */}
                <div className="flex items-center gap-4 md:gap-5">
                    <img
                        className="w-12 h-12 md:w-20 md:h-20 rounded-lg object-cover flex-shrink-0"
                        src={app.image}
                        alt={app.title}
                    />

                    <div className="flex flex-col gap-1.5">
                        <h4 className="text-base md:text-lg font-medium line-clamp-1">
                            {app.title}
                        </h4>

                        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
                            <span className="text-[#00D390] font-medium flex items-center gap-1">
                                <GoDownload className="text-base" /> {app.downloads}M
                            </span>
                            <span className="text-[#FF8811] font-medium flex items-center gap-1">
                                <FaStar className="text-base" /> {app.ratingAvg}
                            </span>
                            <span className="text-[#627382] font-medium">
                                {app.size} MB
                            </span>
                        </div>
                    </div>
                </div>

                {/* Uninstall Button */}
                <div className="md:w-auto w-full md:text-right">
                    <button className="btn btn-sm md:btn-md btn-success text-white w-full md:w-auto">
                        Uninstall
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InstalledAppCard;