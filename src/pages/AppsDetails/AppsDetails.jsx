import { useLoaderData, useParams } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png"
import ratingsIcon from "../../assets/icon-ratings.png"
import reviewsIcon from "../../assets/icon-review.png"
import { BarChart } from "recharts";
import RatingsChart from "../../components/RatingsChart/RatingsChart";

const AppsDetails = () => {
    const apps = useLoaderData();
    const { id } = useParams();
    const appId = parseInt(id);

    const app = apps.find(app => app.id === appId);
    const { image, title, companyName, downloads, ratingAvg, reviews, size, ratings, description } = app;
    return (
        <div className="bg-[#F5F5F5]">
            <div className="container mx-auto px-2 py-10 md:py-20">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10">
                    <div class="">
                        <img className="w-full" src={image} alt="image" />
                    </div>
                    <div class="md:col-span-3">
                        <h4 className="text-2xl md:text-4xl font-bold">{title}</h4>
                        <p className="text-[#627382] md:text-lg font-medium md:py-2">Developed by <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold">{companyName}</span></p>
                        <div className="divider"></div>
                        <div className="flex gap-10 md:gap-20">
                            <div>
                                <img className="w-7 md:w-10" src={downloadIcon} alt="downloadIcon" />
                                <p className="py-1 md:py-2">Downloads</p>
                                <h4 className="text-2xl md:text-4xl font-bold">{downloads}</h4>
                            </div>
                            <div>
                                <img className="w-7 md:w-10" src={ratingsIcon} alt="downloadIcon" />
                                <p className="py-1 md:py-2">Average Ratings</p>
                                <h4 className="text-2xl md:text-4xl font-bold">{ratingAvg}</h4>
                            </div>
                            <div>
                                <img className="w-7 md:w-10" src={reviewsIcon} alt="downloadIcon" />
                                <p className="py-1 md:py-2">Total Reviews</p>
                                <h4 className="text-2xl md:text-4xl font-bold">{reviews}K</h4>
                            </div>
                        </div>
                        <button className="btn md:btn-lg btn-success text-white mt-5 md:mt-10">Install Now ({size} MB)</button>
                    </div>
                </div>
                <div className="divider"></div>
                {/* charts */}
                <div>
                    <RatingsChart ratings={ratings} />
                </div>
                <div className="divider"></div>
                <div>
                    <h4 className="text-xl md:text-2xl font-semibold">Description</h4>
                    <p className="text-[#627382] text-lg pt-5">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default AppsDetails;