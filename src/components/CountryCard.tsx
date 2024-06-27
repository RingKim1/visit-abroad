import React from "react";
import styled from "styled-components";
import { Country } from "../types/country.type";

type CountryCardProps = {
  country: Country;
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
};

const CountryCard: React.FC<CountryCardProps> = ({ country, setCountries }) => {
  const toggleVisited = (cca3: string): void => {
    setCountries((countries) =>
      countries.map((country) =>
        country.cca3 === cca3
          ? { ...country, isVisited: !country.isVisited }
          : country
      )
    );
  };

  return (
    <Li
      $visited={country.isVisited ?? false}
      onClick={() => toggleVisited(country.cca3)}
    >
      <Img src={country.flags.png} alt={`${country.name.common} flag`} />
      <H3>{country.name.common}</H3>
      <p>{country.capital}</p>
    </Li>
  );
};

export default CountryCard;

const Li = styled.li<{ $visited: boolean }>`
  width: 200px;
  height: 150px;

  border-radius: 5px;
  background-color: white;

  margin: 10px;
  padding: 20px;

  cursor: pointer;

  border: ${({ $visited }) => ($visited ? "1px solid yellow" : "none")};
`;

const Img = styled.img`
  width: 80px;
  height: 60px;
  margin: 0px 56px 16px;
  border: none;
`;

const H3 = styled.h3`
  margin-bottom: 10px;
`;
