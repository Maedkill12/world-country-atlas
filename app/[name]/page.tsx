import { fetchBorderCountries, fetchCountries } from "@/util";
import Container from "../components/Container";
import BackButton from "./components/BackButton";
import Image from "next/image";
import Info from "../components/country/Info";
import Link from "next/link";

type Props = {
  params: { name: string };
};

export default async function CountryPage({ params: { name } }: Props) {
  const countryPromise: Promise<CountryDetails[]> = fetchCountries(name);
  const country = (await countryPromise)[0];
  const borderCountriesPromise: Promise<Country[]> = fetchBorderCountries(
    country.borders
  );
  const borderCountries = await borderCountriesPromise;

  const nativeName =
    country.name.nativeName[
      (Object.entries(country.name.nativeName)[0] ?? [])[0]
    ]?.common;
  const currenciesData = Object.entries(country.currencies);
  const languagesData = Object.entries(country.languages);

  let currencieNames = "";
  currenciesData.forEach(([key, value]) => {
    if (!currencieNames) {
      currencieNames = value.name;
      return;
    }
    currencieNames += ", " + value.name;
  });

  let languageNames = "";
  languagesData.forEach(([key, value]) => {
    if (!languageNames) {
      languageNames = value;
      return;
    }
    languageNames += ", " + value;
  });

  return (
    <main>
      <Container className="flex flex-col gap-12 mt-10 dark:text-white">
        <div className="w-fit">
          <BackButton />
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="relative h-[200px] sm:h-[400px] max-w-[640px]">
            <Image src={country.flags["png"]} alt={country.flags["alt"]} fill />
          </div>
          <div className="flex flex-col justify-start gap-4 sm:justify-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">{country.name.common}</h1>
              <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between">
                <div>
                  <Info tag="Native Name" value={nativeName} />
                  <Info
                    tag="Population"
                    value={country.population.toLocaleString()}
                  />
                  <Info tag="Region" value={country.region} />
                  <Info tag="Sub Region" value={country.subregion} />
                  <Info tag="Capital" value={country.capital[0]} />
                </div>
                <div>
                  <Info tag="Top Level Domain" value={country.tld[0]} />
                  <Info tag="Currencies" value={currencieNames} />
                  <Info tag="Languages" value={languageNames} />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 md:gap-4 md:flex-row">
              <h2 className="font-bold">Border Countries: </h2>
              <div className="flex flex-row flex-wrap gap-2">
                {borderCountries.map((border) => (
                  <Link
                    href={`/${border.name.common}`}
                    key={border.name.common}
                    className="text-center px-2 py-1 w-20 truncate bg-white dark:bg-[#2B3743] shadow-md dark:shadow-gray-800 shadow-gray-200"
                    title={border.name.common}
                  >
                    {border.name.common}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

export async function generateStaticParams() {
  const countries: Country[] = await fetchCountries();

  return countries.map((country) => ({
    name: country.name.common,
  }));
}
