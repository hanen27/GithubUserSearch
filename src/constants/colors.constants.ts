import { DefaultTheme } from "@react-navigation/native";

const DarkModeColors = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    
  },
};

 const LightModeColors = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    white: "#fff",
    black: "#000",
    blue: "#0096FF",
    darkGrey: "#66717B",
    gray: "#D3D3D3"
  },
};

export { DarkModeColors, LightModeColors };
