export type Country = {
  capital: string[];
  cca3: string;
  flags: {
    png: string;
    svg: string;
  };
  isVisited: boolean;
  name: {
    common: string;
    official: string;
    nativeName: Record<string, { official: string; common: string }>;
  };
};
