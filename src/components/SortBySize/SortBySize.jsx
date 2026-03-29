
const SortBySize = ({ installedApps, handleSort }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-2 items-center pb-5">
            <h4 className="text-lg md:text-2xl font-semibold">({installedApps.length}) Apps Found</h4>
            <select className="select select-sm md:select-md lg:select-lg bg-[#F5F5F5]">
                <option value="" selected disabled>Sort By</option>
                <option onClick={() => handleSort("size")} value="size">Sort By Size</option>
                <option onClick={() => handleSort("downloads")} value="downloads">Sort By Downloads</option>
            </select>
        </div>
    );
};

export default SortBySize;