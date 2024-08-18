import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

const ACCESS_KEY = "m_w47b36q5_Jo_JQS3otzDhFy5mBtTz798Vl9Mb7Z-M";

export type Photo = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
};

export type SearchPhotosResponse = {
  total_pages: number;
  results: Photo[];
};

export const searchPhotos = async (query: string, page: number): Promise<SearchPhotosResponse> => {
  const response = await axios.get<SearchPhotosResponse>("/search/photos", {
    params: {
      client_id: ACCESS_KEY,
      query: query,
      page: page,
      per_page: 10,
      orientation: 'landscape',
    }
  });
  return response.data;
};