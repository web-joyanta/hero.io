
const HeroStats = () => {
    return (
        <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white text-center">
            <div className="container mx-auto px-2 py-10 md:py-24">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold pb-5 md:pb-10">Trusted by Millions, Built for You</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-sm font-extralight">
                    <div>
                        <p>Total Downloads</p>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold py-2 md:py-5">29.6M</h2>
                        <p>21% more than last month</p>
                    </div>
                    <div>
                        <p>Total Reviews</p>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold py-2 md:py-5">906K</h2>
                        <p>46% more than last month</p>
                    </div>
                    <div>
                        <p>Active Apps</p>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold py-2 md:py-5">132+</h2>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroStats;