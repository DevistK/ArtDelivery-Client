export type DynamicObject = {
  [key: string]: string; // 동적인 키와 값의 타입 선언
};

export enum Size {
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

export const SizeOptions = [
  { value: Size.lg, label: "1024x1024" },
  { value: Size.xlw, label: "1792x1024" },
  { value: Size.xlh, label: "1024x1792" },
];

export const QualityOptions = [
  { value: Quality.standard, label: "standard" },
  { value: Quality.hd, label: "hd" },
];

export const StyleOptions = [
  { value: Style.vivid, label: "vivid" },
  { value: Style.natural, label: "natural" },
];

export const StyleList = ["vivid", "natural"];

export const QualityList = ["standard", "hd"];
