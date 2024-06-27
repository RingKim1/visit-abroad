import React, { useEffect, useState } from "react";
import { getCountries } from "./api/getCountries";
import styled from "styled-components";
import CountryList from "./components/CountryList";

const App = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries();
        const countriesWithVisited = data.map((country) => ({
          ...country,
          isVisited: false,
        }));
        setCountries(countriesWithVisited);
      } catch (err) {
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

  const visitedCountries = countries.filter((country) => country.isVisited);
  const yetVisitedCountries = countries.filter((country) => !country.isVisited);

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
