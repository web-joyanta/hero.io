import { GoDownload } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AppCard = ({ app }) => {
    const { id, image, title, downloads, ratingAvg } = app;
    return (
        <Link to={`/apps/details/${id}`} className="bg-white flex flex-col p-4 shadow-md rounded-sm">
            <img className="w-full flex-1 rounded-md" src={image} alt="card img" />
            <div>
                <h5 className="md:text-lg flex-1 font-semibold py-3">{title}</h5>
                <div className="flex flex-1 items-center justify-between">
                    <span className="text-[#00D390] bg-[#F1F5E8] font-medium rounded-sm px-1.5 py-0.5 flex items-center gap-1"><GoDownload /> {downloads}M</span>
                    <span className="text-[#FF8811] bg-[#FFF0E1] font-medium rounded-sm px-1.5 py-0.5 flex items-center gap-1"><FaStar /> {ratingAvg}</span>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;