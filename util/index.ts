export const countries: Country[] = [];

export const fetchCountries = async (name?: string, code?: string) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/${
      name ? `name/${name}` : code ? "alpha" : "all"
    }?fields=name,population,region,capital,flags,subregion,tld,currencies,languages,borders${
      code ? `&codes=${code}` : ""
    }`
  );

  return await res.json();
};

export const fetchBorderCountries = async (codes: string[]) => {
  const countries: Country[] = [];
  for (let code of codes) {
    const country = (await fetchCountries("", code))[0];
    countries.push(country);
  }
  return countries;
};

export const updateSeachParams = (field: string, value: string): string => {
  const seachParams = new URLSearchParams(window.location.search);
  if (!field) {
    return "";
  }
  if (!value) {
    seachParams.delete(field);
  } else {
    seachParams.set(field, value);
  }
  return `${window.location.pathname}?${seachParams}`;
};
