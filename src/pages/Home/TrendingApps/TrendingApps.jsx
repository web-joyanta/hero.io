import React, { use } from 'react';
import HeadingTitle from '../../../components/HeadingTitle/HeadingTitle';
import AppCard from '../../../components/AppCard/AppCard';
import { Link } from 'react-router';

const TrendingApps = ({ appsPromise }) => {
    const appsData = use(appsPromise);
    return (
        <div className="bg-[#F5F5F5] pb-10 md:pb-20">
            <HeadingTitle title="Trending Apps" subTitle="Explore All Trending Apps on the Market developed by us" />
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-2">
                {
                    appsData
                        .sort((a, b) => b.ratingAvg - a.ratingAvg)
                        .map(app => <AppCard key={app.id} app={app} />)
                        .slice(0, 8)
                }
            </div>
            <div className="text-center mt-5 md:mt-10">
                <Link to="/apps" className="btn btn-sm lg:btn-md bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white">Show All</Link>
            </div>
        </div>
    );
};

export default TrendingApps;