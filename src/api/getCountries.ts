import countriesApi from "../axios/countriesApi";

export const getCountries = async () => {
  const response = await countriesApi.get(`/`);
  return response.data;
};
