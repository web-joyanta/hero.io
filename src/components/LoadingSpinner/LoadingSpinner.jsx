import logoImg from "../../assets/logo.png"

const LoadingSpinner = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <h4 className="text-xl md:text-4xl font-semibold flex items-center gap-2">
                L
                <img
                    className="w-8 md:w-14 animate-spin"
                    src={logoImg}
                    alt="logo"
                />
                O A D I N G
            </h4>
        </div>
    );
};

export default LoadingSpinner;