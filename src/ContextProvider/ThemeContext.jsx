import React, { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext("");

export const useTheme = () => useContext(ThemeContext);

const ThemeContextProvider = (props) => {
  const themePlate = [
    {
      background: "rgb(7,25,51)",
      backgroundImage:
        "linear-gradient(90deg, rgba(7,25,51,1) 0%, rgba(18,42,84,1) 24%, rgba(4,21,45,1) 100%)",
    },
    {
      backgroundImage: "linear-gradient(to right, #fa709a 0%, #fee140 100%)",
    },
    {
      backgroundColor: "#0093E9",
      backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
    },
    {
      backgroundColor: "#4158D0",
      backgroundImage:
        "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
    },
    {
      backgroundImage:
        "radial-gradient( circle farthest-corner at 10% 20%,  rgba(2,37,78,1) 0%, rgba(4,56,126,1) 19.7%, rgba(85,245,221,1) 100.2% )",
    },
  ];
  const [themeSelector, setThemeSelector] = useState(themePlate[0]);
  return (
    <ThemeContext.Provider
      value={{ themePlate, themeSelector, setThemeSelector }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
