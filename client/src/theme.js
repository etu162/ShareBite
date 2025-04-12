// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#FAFAFA",
    50: "#F0F0F0",
    100: "#DADADA",
    200: "#B8B8B8",
    300: "#949494",
    400: "#6E6E6E",
    500: "#4B4B4B",
    600: "#2F2F2F",
    700: "#1C1C1C",
    800: "#111111",
    900: "#0B0B0B",
    1000: "#000000",
  },
  primary: {
    50: "#FFF3E0",
    100: "#FFE0B2",
    200: "#FFB74D",
    300: "#FFA726",
    400: "#FB8C00",
    500: "#F57C00",
    600: "#EF6C00",
    700: "#E65100",
    800: "#BF360C",
    900: "#A33A0D",
  },
  accent: {
    100: "#FFF176",
    200: "#FFD54F",
    300: "#FFCA28",
    400: "#FFB300",
    500: "#FFA000",
    600: "#FF8F00",
    700: "#FF6F00",
    800: "#F4511E",
    900: "#E64A19",
  },
};

// sharper mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[700],
            },
            accent: {
              main: colorTokens.accent[400],
              light: colorTokens.accent[200],
              dark: colorTokens.accent[600],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[300],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[500],
              light: colorTokens.grey[700],
            },
            background: {
              default: colorTokens.grey[900],
              alt: colorTokens.grey[800],
            },
          }
        : {
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[100],
            },
            accent: {
              main: colorTokens.accent[500],
              light: colorTokens.accent[200],
              dark: colorTokens.accent[700],
            },
            neutral: {
              dark: colorTokens.grey[600],
              main: colorTokens.grey[400],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[200],
              light: colorTokens.grey[50],
            },
            background: {
              default: colorTokens.grey[10],
              alt: colorTokens.grey[0],
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 14,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 42,
        fontWeight: 800,
        letterSpacing: "-0.5px",
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 34,
        fontWeight: 700,
        letterSpacing: "-0.25px",
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 28,
        fontWeight: 700,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
        fontWeight: 600,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 500,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
        fontWeight: 500,
      },
      body1: {
        fontSize: 14,
        fontWeight: 400,
      },
      body2: {
        fontSize: 12,
        fontWeight: 400,
      },
    },
  };
};
