import styled from "styled-components";
import CountryCard from "./CountryCard";
import React from "react";
import { Country } from "../types/country";

type CountryListProps = {
  listTitle: string;
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
};

const CountryList: React.FC<CountryListProps> = ({
  listTitle,
  countries,
  setCountries,
}) => {
  return (
    <Container>
      <h1>{listTitle}</h1>
      <Div>
        <Ul>
          {countries.map((country) => (
            <CountryCard
              key={country.cca3}
              country={country}
              setCountries={setCountries}
            />
          ))}
        </Ul>
      </Div>
    </Container>
  );
};

export default CountryList;

const Container = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  width: 800px;
  margin: 20px;
`;

const Ul = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
`;
