import { CiSearch } from 'react-icons/ci';

const SearchField = ({ apps, handleSearch }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-2 items-center pb-5">
            <h4 className="text-lg md:text-2xl font-semibold">({apps.length}) Apps Found</h4>
            <label className="input input-sm md:input-md lg:input-lg bg-[#F5F5F5]">
                <CiSearch className="text-2xl opacity-50" />
                <input onChange={handleSearch} type="search" required placeholder="Search Apps" />
            </label>
        </div>
    );
};

export default SearchField;