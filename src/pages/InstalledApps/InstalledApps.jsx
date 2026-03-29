import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getLocalStorage } from '../../utility/LocalStorage';
import LoadingSpinner from './../../components/LoadingSpinner/LoadingSpinner';
import HeadingTitle from '../../components/HeadingTitle/HeadingTitle';
import SortBySize from '../../components/SortBySize/SortBySize';
import InstalledAppCard from './InstalledAppCard';
import AppsNotFound from '../../components/AppsNotFound/AppsNotFound';

const InstalledApps = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const data = useLoaderData();

    useEffect(() => {
        const installedAppsData = getLocalStorage();
        const installedData = installedAppsData.map((id) => parseInt(id));
        const appsData = data.filter((app => installedData.includes(app.id)))
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setInstalledApps(appsData);
        setLoading(false);
    }, [data]);

    if (loading) {
        return <LoadingSpinner />
    }

    return (
        <div className="bg-[#F5F5F5] pb-10 md:pb-20">
            <div className="container mx-auto px-2">
                <HeadingTitle title="Your Installed Apps" subTitle="Explore All Trending Apps on the Market developed by us" />
                <SortBySize installedApps={installedApps} />
                {installedApps.length === 0 && <AppsNotFound />}
                <div className="space-y-5">
                    {
                        installedApps.map(app => <InstalledAppCard key={app.id} app={app} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default InstalledApps;