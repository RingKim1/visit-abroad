import React, { useEffect, useState } from "react";
import { getCountries } from "./api/getCountries";
import styled from "styled-components";
import CountryList from "./components/CountryList";
import { Country } from "./types/country.type";

const App: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async (): Promise<void> => {
      try {
        const data: Country[] = await getCountries();
        const countriesWithVisited: Country[] = data.map(
          (country: Country) => ({
            ...country,
            isVisited: false,
          })
        );
        setCountries(countriesWithVisited);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // console.log(countries);

  const visitedCountries: Country[] = countries.filter(
    (country: Country) => country.isVisited
  );
  const yetVisitedCountries: Country[] = countries.filter(
    (country: Country) => !country.isVisited
  );

  return (
    <MainContainer>
      <CountryList
        listTitle="visited countries"
        countries={visitedCountries}
        setCountries={setCountries}
      />
      <CountryList
        listTitle="Countries List"
        countries={yetVisitedCountries}
        setCountries={setCountries}
      />
    </MainContainer>
  );
};

export default App;

const MainContainer = styled.div`
  background-color: lightblue;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;
`;
