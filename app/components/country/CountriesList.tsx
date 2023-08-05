import CountryCard from "./CountryCard";

type Props = {
  countries: Country[];
};

export default function CountriesList({ countries }: Props) {
  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
}
