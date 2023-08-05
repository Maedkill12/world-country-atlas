"use client";

import { useState } from "react";
import Container from "../Container";
import Dropdown from "../Dropdown";
import SearchInput from "../SearchInput";
import CountriesList from "./CountriesList";

const regions: Region[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

type Props = {
  countries: Country[];
};

export default function CountryExplorer({ countries }: Props) {
  const [region, setRegion] = useState<Region | "">("");
  const [country, setCountry] = useState("");

  const filteredCountries = countries.filter(
    (c) =>
      c.name.common.toLowerCase().includes(country.toLowerCase()) &&
      c.region.toLowerCase().includes(region.toLowerCase())
  );

  return (
    <main>
      <Container className="flex flex-col gap-4 mt-10 sm:h-14 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
        <SearchInput value={country} setValue={(value) => setCountry(value)} />
        <Dropdown list={regions} onClick={(value) => setRegion(value)} />
      </Container>
      <Container className="my-10">
        <CountriesList countries={filteredCountries} />
      </Container>
    </main>
  );
}
