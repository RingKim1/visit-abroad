import countriesApi from "../axios/countriesApi";
import { Country } from "../types/country.type";

export const getCountries = async (): Promise<Country[]> => {
  const response = await countriesApi.get<Country[]>(`/`);
  return response.data;
};
