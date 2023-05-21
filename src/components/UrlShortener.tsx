import React, { useState } from 'react';
import { useGlobalContext } from '@/<src>/app/Context/store';
import api, { ShortUrlResponse } from '../utils/api';

const UrlShortener = () => {
    const [inputUrl, setInputUrl] = useState('');
    const { addShortenedUrl } = useGlobalContext();
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isInputEmpty, setIsInputEmpty] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputUrl) {
            setIsInputEmpty(true);
            return;
        }
        try {
            setIsLoading(true);
            const data: ShortUrlResponse = await api.shortUrl.fetch(inputUrl);
            if (data.error) {
                setError(data.error);
            } else if (data.result) {
                const { short_link } = data.result;
                addShortenedUrl(inputUrl, short_link);
                setInputUrl("");
            }
        } catch (error) {
            console.error(error);
            setError("An error occurred while shortening the URL.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            {/* Render error message if there's an error */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Render loading spinner while API call is in progress */}
            {isLoading && <p className="text-white">Loading...</p>}

            {/* Render form to input and submit URL */}
            {!isLoading && !error && (
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 md:gap-4">
                    <input
                        placeholder="Shorten a link here..."
                        className={`flex flex-1 h-16 rounded-md px-4 py-4 text-md ${isInputEmpty ? "border-4 border-red-400 text-red-500" : ""
                            }`}
                        value={inputUrl}
                        onChange={(e) => {
                            setInputUrl(e.target.value);
                            setIsInputEmpty(false);
                        }}
                        style={{ color: isInputEmpty ? "red" : "initial" }}
                    />
                    {/* Render label for empty input */}
                    {isInputEmpty && <label className="text-red-400 text-sm italic md:absolute bottom-10">Please add a link</label>}
                    <button type="submit" className="mt-2 text-lg bg-customCyan px-6 py-3 rounded-md text-white font-bold md:mt-0 md:text-sm hover:bg-[#74eeee] duration-300">
                        Shorten it!
                    </button>
                </form>
            )}
        </div>
    );
};

export default UrlShortener;
