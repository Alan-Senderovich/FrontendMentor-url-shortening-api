import Image from "next/image";


type Props = {
    title: string;
    text: string;
    pos: string;
}


const CardStats = ({ title, text, pos }: Props) => {
    let imageSrc = "";
    if (pos === "left") {
        imageSrc = "/icon-brand-recognition.svg";
    } else if (pos === "center") {
        imageSrc = "/icon-detailed-records.svg";
    } else if (pos === "right") {
        imageSrc = "/icon-fully-customizable.svg";
    }

    return (
        <section className='bg-white text-center h-80 rounded-md flex flex-col px-6 pb-10 md:h-60 justify-end relative md:text-left'>
            <h4 className="text-2xl font-extrabold pb-4 text-customBlueDark md:text-xl">{title}</h4>
            <p className="text-md md:text-sm text-customVioletGrayi leading-loose">{text}</p>
            <div className="bg-customBlueDark absolute left-1/2 -top-10 transform -translate-x-1/2 md:-top-10 md:left-10 md:translate-x-0 p-4 rounded-full">
                <div className="w-[50px]">
                    <Image
                        src={imageSrc}
                        alt="icon"
                        width={50}
                        height={50}
                    />
                </div>
            </div>
        </section>
    )
}

export default CardStats