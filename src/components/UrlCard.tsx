import React, { useState } from 'react';

type Props = {
    id: string;
    url: string;
    shortUrl: string;
};

const UrlCard = ({ id, url, shortUrl }: Props) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(shortUrl)
            .then(() => {
                setCopied(true);
                console.log('URL copied to clipboard');
            })
            .catch((error) => {
                console.error('Failed to copy URL to clipboard:', error);
            });
    };

    return (
        <div key={id} className='flex flex-col bg-white rounded-md px-6 py-4 gap-3 md:gap-6 items-center md:flex-row'>
            <p className='text-xl border-b w-full pb-2 md:w-auto md:border-none flex-1 font-bold'>{url}</p>
            <p className='text-xl font-bold w-full md:w-auto text-customCyan'>{shortUrl}</p>
            <button className={`${copied ? "bg-customBlueDark" : "bg-customCyan hover:opacity-50"} text-lg w-full md:w-auto text-white font-bold py-2 px-6 rounded-md duration-300`} onClick={handleCopy} disabled={copied}>
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    );
};

export default UrlCard;
