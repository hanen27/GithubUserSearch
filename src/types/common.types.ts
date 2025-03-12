import * as AppIcons from "../assets/appIcons";


export type AppIconsKeys = keyof typeof AppIcons;

export type ColorsType = {
  primary?: string;
  card?: string;
  text?: string;
  border?: string;
  notification?: string;
  backgroundColor?: string;
// Custom theme colors
  white?: string;
  black?: string;
  blue?: string;
  darkGrey?: string;
  gray?: string
};

