import { fetchCountries } from "@/util";
import CountryExplorer from "./components/country/CountryExplorer";

export default async function Home() {
  const countriesPromise: Promise<Country[]> = fetchCountries();
  const countries = await countriesPromise;

  return <CountryExplorer countries={countries} />;
}
