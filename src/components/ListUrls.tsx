"use client";

import { useGlobalContext } from '@/<src>/app/Context/store';
import React from 'react';
import UrlCard from './UrlCard';

type Props = {
    id: string;
    url: string;
    shortUrl: string;
}

const ListUrls = () => {
    const { data } = useGlobalContext();

    return (
        <div className='flex flex-col gap-4 md:pt-4'>
            {data && data.map((item: Props) => (
                <UrlCard key={item.id} {...item} />
            ))}
        </div>
    );
};

export default ListUrls;
