import Image from "next/image"
import { RefObject } from 'react';
import { handleScroll } from "../utils/scrollToInput";

interface StatisticsProps {
    scrollTargetRef: RefObject<HTMLDivElement>;
}

const Hero: React.FC<StatisticsProps> = ({ scrollTargetRef }) => {

    return (
        <div className="flex flex-col-reverse relative overflow-x-hidden pb-36 md:pb-64">
            <div className="main-container-mob md:main-container text-center md:text-start">
                <div className="md:w-[60%] pt-10 md:pt-20 md:font-medium text-customBlueDark tracking-tight">
                    <h1 className="text-5xl md:text-7xl md:pb-2 font-extrabold">More than just</h1>
                    <h1 className="text-5xl md:text-7xl pb-2 font-extrabold">shorter links</h1>
                    <p className="text-xl md:w-5/6 text-customGrayDark pb-7 leading-relaxed">Build your brand`s recognition and get detailed insights on how your links are performing.</p>
                    <button onClick={() => handleScroll(scrollTargetRef)} className="text-xl px-12 py-4 rounded-full bg-customCyan font-bold text-white md:text-lg md:px-8 md:py-2 hover:opacity-60 duration-300">
                        Get Started
                    </button>
                </div>
            </div>
            <div className="h-[360px] md:h-auto md:w-1/2 static md:absolute md:top-8 md:-right-20">
                <Image
                    className="h-[100%] object-cover object-left"
                    src="/illustration-working.svg"
                    alt="logo"
                    width={820}
                    height={800}
                />
            </div>

        </div>
    )
}

export default Hero