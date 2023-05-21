import { RefObject } from 'react';

interface StatisticsProps {
    scrollTargetRef: RefObject<HTMLDivElement>;
}


import CardStats from "./CardStats"
import InputContainer from "./InputContainer"
import ListUrls from "./ListUrls"


const dataItems = [
    {
        id: 1,
        title: "Brand Recognition",
        text: "Boost your brand recognition with each click. Generic links don`t mean a thing. Branded links help instil confidence in your content.",
        icon: "/logo.svg",
        pos: "left",
    },
    {
        id: 2,
        title: "Detailed Records",
        text: "Gain insights into who is clicking your  links. Knowing when and where people engage with your content helps inform better decisions.",
        icon: "/logo.svg",
        pos: "center",
    },
    {
        id: 3,
        title: "Fully Customizable",
        text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
        icon: "/logo.svg",
        pos: "right",
    }
]

const Statistics: React.FC<StatisticsProps> = ({ scrollTargetRef }) => {
    return (
        <div id="statistics" className='bg-customGray pb-24 relative'>
            <div className='main-container-mob md:main-container pt-28'>
                {/* ------- */}
                <ListUrls />
                {/* ------- */}
                <div className='pt-24 flex flex-col'>
                    <div className='md:w-1/2 flex flex-col mx-auto text-center pb-24'>
                        <h2 className='text-3xl font-extrabold text-customBlueDark pb-4 md:text-4xl'>Advanced Statistics</h2>
                        <p className='text-customVioletGrayi leading-relaxed text-lg font-bold'>Track how your links are performing across the web with our advanced statics dashboard.</p>
                    </div>
                    <div className="relative">
                        <div className='grid md:grid-cols-3 gap-20 md:gap-4 md:h-[350px]'>
                            {dataItems.map((item) => (
                                <div key={item.id} className={`${item.pos === "center" && "place-self-center"} ${item.pos === "right" && "place-self-end"} z-50`}>
                                    <CardStats title={item.title} text={item.text} pos={item.pos} />
                                </div>
                            ))}
                        </div>
                        <div className="bg-customCyan z-10 w-2 h-full left-1/2 top-0 transform -translate-x-1/2 md:h-2 absolute md:top-[45%] md:right-0 md:w-full"></div>
                    </div>
                </div>
            </div>
            {/* ------- */}
            <div ref={scrollTargetRef}>
                <InputContainer />
            </div>
            {/* ------- */}
        </div>
    )
}

export default Statistics