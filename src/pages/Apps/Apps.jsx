import React, { useEffect, useState } from 'react';
import HeadingTitle from '../../components/HeadingTitle/HeadingTitle';
import SearchField from '../../components/SearchField/SearchField';
import AppCard from '../../components/AppCard/AppCard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const Apps = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                setApps(data);
                setLoading(false);
            });
    }, [])

    if (loading) {
        return <LoadingSpinner />
    };
    return (
        <div className="bg-[#F5F5F5]">
            <div className="container mx-auto px-2 pb-10 md:pb-20">
                <HeadingTitle title="Our All Applications" subTitle="Explore All Apps on the Market developed by us. We code for Millions" />
                <SearchField />
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {
                        apps.map(app => <AppCard key={app.id} app={app} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Apps;