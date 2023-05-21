'use client';
import { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

type DataType = {
    id: string;
    url: string;
    shortUrl: string;
};

interface ContextProps {
    shortenedUrl: string;
    setShortenedUrl: Dispatch<SetStateAction<string>>;
    data: DataType[];
    setData: Dispatch<SetStateAction<DataType[]>>;
    addShortenedUrl: (url: string, shortUrl: string) => void;
}

const GlobalContext = createContext<ContextProps>({
    shortenedUrl: '',
    setShortenedUrl: (): string => '',
    data: [],
    setData: (): DataType[] => [],
    addShortenedUrl: (url: string, shortUrl: string) => { },
});

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
    const [shortenedUrl, setShortenedUrl] = useState<string>('');
    const [data, setData] = useState<DataType[]>([]);

    const addShortenedUrl = (url: string, shortUrl: string) => {
        const newData = [...data, { id: uuidv4(), url, shortUrl }];
        setData(newData);
    };

    return (
        <GlobalContext.Provider value={{ shortenedUrl, setShortenedUrl, data, setData, addShortenedUrl }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = (): ContextProps => useContext(GlobalContext);
