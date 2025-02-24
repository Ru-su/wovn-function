export interface IData {
  translation_data: ITranslationData[];
  settings: { [kwy: string]: number | boolean };
  screens: { [kwy: string]: string };
  languages: any;
}

export interface ITranslationData {
  source: string;
  type: string;
  translations: {
    [key: string]: ITranslations[];
  };
}

export interface ITranslations {
  saved_dst: null | string;
  published_dst: null | string;
  screen_name: null | string;
}

export interface IToken {
  type: "staticText" | "number" | "text";
  value?: string;
  minLength?: number;
  maxLength?: number;
}
