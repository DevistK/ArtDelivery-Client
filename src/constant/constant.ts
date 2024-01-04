export type DynamicObject = {
  [key: string]: string; // 동적인 키와 값의 타입 선언
};

export enum Size {
  sm = "256x256",
  md = "512x512",
  lg = "1024x1024",
  xlw = "1792x1024",
  xlh = "1024x1792",
}

export enum Style {
  vivid = "vivid",
  natural = "natural",
}

export enum Quality {
  standard = "standard",
  hd = "hd",
}

export enum SelectOption {
  size = "size",
  style = "style",
  quality = "quality",
}
