export interface ShortUrlResponse {
  result?: {
    short_link: string;
  };
  error?: string;
}

const api = {
  shortUrl: {
    fetch: async (inputUrl: string): Promise<ShortUrlResponse> => {
      try {
        const response = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${inputUrl}`
        );
        const data: ShortUrlResponse = await response.json();
        return data;
      } catch (error) {
        throw new Error("An error occurred while shortening the URL.");
      }
    },
  },
};

export default api;
