import { GoPackage } from 'react-icons/go';
import { Link } from 'react-router';

const AppsNotFound = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm py-16 px-6 text-center">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <GoPackage className="text-4xl text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Installed Apps Found</h3>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
                You haven't installed any apps yet. Browse our trending apps and start installing your favorites.
            </p>
            <Link to="/apps" className="btn btn-sm md:btn-md btn-success px-8 py-3 text-white font-medium rounded-lg hover:bg-success-400 transition-colors">Browse Apps</Link>
        </div>
    );
};

export default AppsNotFound;