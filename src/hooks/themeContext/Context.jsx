// 1. Create a new file, e.g., AppContext.js
import React, { createContext, useContext, useState } from "react";

// Create the context
const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [appBG, setAppBG] = useState("#000000");
  const [fontPrimary, setFontPrimary] = useState("#FFFFFF");

  const switchToLight = () => {
    setAppBG("#FFFFFF");
    setFontPrimary("#000000");
  };

  const switchToDark = () => {
    setAppBG("#000000");
    setFontPrimary("#FFFFFF");
  };

  const switchToLavender = () => {
  setAppBG("#bc7bd1"); // Lavender background
  setFontPrimary("#FFFFFF"); // White text for contrast
};

const switchToBlueGray = () => {
  setAppBG("#37474F"); // Blue Gray (like slate)
  setFontPrimary("#ECEFF1"); // Light gray text
};

const switchToMintGreen = () => {
  setAppBG("#A8E6CF"); // Soft mint green
  setFontPrimary("#004D40"); // Deep teal for good contrast
};

const switchToWarmSunset = () => {
  setAppBG("#FF8A65"); // Warm sunset orange
  setFontPrimary("#3E2723"); // Dark brown for contrast
};



  const value = {
    appBG,
    fontPrimary,
    switchToLight,
    switchToDark,
    switchToLavender,
    switchToBlueGray,
    switchToMintGreen,
    switchToWarmSunset
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
