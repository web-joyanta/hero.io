import { Suspense } from "react";
import Banner from "../../components/Banner/Banner";
import HeroStats from "./HeroStats/HeroStats";
import TrendingApps from "./TrendingApps/TrendingApps";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const appsPromise = fetch("/data.json").then(res => res.json());
const Home = () => {
    return (
        <div >
            <Banner />
            <HeroStats />
            <Suspense fallback={<LoadingSpinner />}>
                <TrendingApps appsPromise={appsPromise} />
            </Suspense>
        </div>
    );
};

export default Home;