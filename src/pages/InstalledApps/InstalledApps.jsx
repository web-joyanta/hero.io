import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getLocalStorage } from '../../utility/LocalStorage';
import LoadingSpinner from './../../components/LoadingSpinner/LoadingSpinner';
import HeadingTitle from '../../components/HeadingTitle/HeadingTitle';
import SortBySize from '../../components/SortBySize/SortBySize';
import InstalledAppCard from './InstalledAppCard';
import AppsNotFound from '../../components/AppsNotFound/AppsNotFound';
import Swal from 'sweetalert2';

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

    const handleSort = (type) => {
        setLoading(true)
        if (type === "size") {
            const sizeSort = [...installedApps].sort((a, b) => b.size - a.size);
            setInstalledApps(sizeSort);
            setLoading(false)
        }
        if (type === "downloads") {
            const downloadsSort = [...installedApps].sort((a, b) => b.downloads - a.downloads);
            setInstalledApps(downloadsSort);
            setLoading(false)
        }
    }

    const handleAppsUninstall = (id) => {
        setLoading(true);
        const storedApps = JSON.parse(localStorage.getItem("installedApps"));
        const updated = storedApps.filter(appId => parseInt(appId) !== id)
        localStorage.setItem("installedApps", JSON.stringify(updated));
        setInstalledApps(updated);
        setLoading(false);
        Swal.fire({
            title: 'Uninstalled!',
            text: 'The app has been uninstalled successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }

    if (loading) {
        return <LoadingSpinner />
    }

    return (
        <div className="bg-[#F5F5F5] pb-10 md:pb-20">
            <div className="container mx-auto px-2">
                <HeadingTitle title="Your Installed Apps" subTitle="Explore All Trending Apps on the Market developed by us" />
                <SortBySize installedApps={installedApps} handleSort={handleSort} />
                {installedApps.length === 0 && <AppsNotFound />}
                <div className="space-y-5">
                    {
                        installedApps.map(app => <InstalledAppCard key={app.id} app={app} handleAppsUninstall={handleAppsUninstall} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default InstalledApps;