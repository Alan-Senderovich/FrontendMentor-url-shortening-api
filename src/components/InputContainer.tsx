"use client";
import { useGlobalContext } from '@/<src>/app/Context/store';
import React, { useState } from 'react'
import ListUrls from './ListUrls';
import UrlShortener from './UrlShortener';

const InputContainer = () => {
    return (
        <div className='absolute -top-20 right-0 left-0 main-container-mob md:main-container'>
            <div className='px-6 py-6 bg-[#3a3053] bg-bg_banner_desktop md:px-12 md:py-16 rounded-lg'>
                <UrlShortener />
            </div>

        </div>
    )
}

export default InputContainer