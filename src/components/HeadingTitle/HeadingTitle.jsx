
const HeadingTitle = ({ title, subTitle }) => {
    return (
        <div className="text-center">
            <h4 className="text-2xl md:text-4xl lg:text-5xl font-bold pt-10 md:pt-20">{title}</h4>
            <p className="text-[#627382] text-sm md:text-lg pt-2 md:pt-5 pb-5 md:pb-10">{subTitle}</p>
        </div>
    );
};

export default HeadingTitle;