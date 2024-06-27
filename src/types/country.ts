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

// api를 불러오고 필요한 부분만 타입을 명시해도 됨
