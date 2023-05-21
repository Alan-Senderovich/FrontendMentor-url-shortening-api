import Image from 'next/image'
import React from 'react'
import FacebookIcon from './icons/FacebookIcon'
import TwitterIcon from './icons/TwitterIcon'
import PinterestIcon from './icons/PinterestIcon'
import InstagramIcon from './icons/InstagramIcon'

type Props = {
    item: {
        id: number,
        name: string,
        // iconSrc: string,
    }
}

const SocialIcons = ({ item: { id, name } }: Props) => {

    return (
        <div key={id}>
            {name === "facebook" && (
                <FacebookIcon className="fill-current hover:text-customCyan cursor-pointer duration-200" />
            )}
            {name === "twitter" && (
                <TwitterIcon className="fill-current hover:text-customCyan cursor-pointer duration-200" />
            )}
            {name === "pinterest" && (
                <PinterestIcon className="fill-current hover:text-customCyan cursor-pointer duration-200" />
            )}
            {name === "instagram" && (
                <InstagramIcon className="fill-current hover:text-customCyan cursor-pointer duration-200" />
            )}
        </div>
    )
}

export default SocialIcons