import { RefObject } from 'react';
import { handleScroll } from '../utils/scrollToInput';

interface StatisticsProps {
    scrollTargetRef: RefObject<HTMLDivElement>;
}

const Banner: React.FC<StatisticsProps> = ({ scrollTargetRef }) => {

    return (
        <section className='bg-[#3a3053]'>
            <div className='flex flex-col text-center py-24 md:py-16 gap-6 bg-bg_banner_desktop bg-no-repeat'>
                <h2 className='text-[1.7rem] md:text-2xl text-white font-bold'>Boost your links today</h2>
                <button onClick={() => handleScroll(scrollTargetRef)} className="bg-customCyan text-xl text-white px-12 py-4 md:text-lg md:px-8 md:py-2 rounded-full mx-auto font-bold hover:bg-[#74eeee] duration-300">
                    Get Started
                </button>
            </div>
        </section>
    )
}

export default Banner