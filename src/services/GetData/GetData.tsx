import axios from "axios";

/**
 * @param url string with the url to fetch data from server
 * @returns data from the url
 */

type Props = {
  url: string;
};

export const GetData = async ({ url }: Props) => {
  const response = await axios.get(url);
  return response.data;
};
