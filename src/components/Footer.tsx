import Image from "next/image"
import Link from "next/link"
import LinksFooter from "./LinksFooter"
import SocialIcons from "./SocialIcons"

const data = [
    {
        id: 1,
        title: "Features",
        links: [{
            id: 1,
            text: "Link Shortening",
            href: "#",
        },
        {
            id: 2,
            text: "Branded Links",
            href: "#",
        },
        {
            id: 3,
            text: "Link Shortening",
            href: "#",
        }]
    },
    {
        id: 2,
        title: "Resources",
        links: [{
            id: 1,
            text: "Blog",
            href: "#",
        },
        {
            id: 2,
            text: "Developers",
            href: "#",
        },
        {
            id: 3,
            text: "Support",
            href: "#",
        }]
    },
    {
        id: 3,
        title: "Company",
        links: [{
            id: 1,
            text: "About",
            href: "#",
        },
        {
            id: 2,
            text: "Our Team",
            href: "#",
        },
        {
            id: 3,
            text: "Careers",
            href: "#",
        },
        {
            id: 4,
            text: "Contact",
            href: "#",
        }
        ]
    }
]

const dataSocial = [
    {
        id: 1,
        name: "facebook",
        iconSrc: "/icon-facebook.svg",
    },
    {
        id: 2,
        name: "twitter",
        iconSrc: "/icon-twitter.svg",
    },
    {
        id: 3,
        name: "pinterest",
        iconSrc: "/icon-pinterest.svg",
    },
    {
        id: 4,
        name: "instagram",
        iconSrc: "/icon-instagram.svg",
    }
]

const Footer = () => {
    return (
        <section className='text-white bg-customBlueDark pb-16 pt-14 md:pb-24 md:pt-20'>
            <div className='main-container-mob md:main-container flex flex-col items-center md:items-start md:flex-row'>
                <div className="md:w-[33%]">
                    <div className="bg-customGray inline-block px-3 pb-2 pt-3">
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            width={113}
                            height={113}
                        />
                    </div>
                </div>
                <div className="grid place-items-center gap-4 md:grid-cols-4 md:gap-16 md:items-start">
                    {data && data.map((item) => (
                        <div key={item.id} className="flex text-sm text-center md:text-start">
                            <LinksFooter item={item} />
                        </div>
                    ))}
                    <div className="flex gap-4 pt-8 md:pt-0">
                        {dataSocial && dataSocial.map((item) => (
                            <SocialIcons key={item.id} item={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer