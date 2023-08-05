type Region = "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";

type Country = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  population: number;
  region: Region;
  capital: string[];
  flags: {
    [key: string]: string;
  };
};

type CountryDetails = Country & {
  subregion: string;
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  borders: string[];
};
