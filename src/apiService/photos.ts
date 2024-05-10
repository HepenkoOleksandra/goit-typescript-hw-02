import axios from "axios";

// ========= 1 variant ========================================
const ACCESS_KEY = 'vfj441z4cBNfYnSEM9lXC0hnAOt-HsGyPNOewAW596g';
const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
    params: {
    per_page: 15,
    orientation: "landscape",
  }
});

export const getImages = async<T> (query: string, page: number): Promise<T> => {
  const {data} = await instance.get('search/photos', {
    params: {
      query,
      page,
    }
  })

  return data;
};