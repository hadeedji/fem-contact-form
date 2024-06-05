export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    colors: {
      transparent: "rgba(0, 0, 0, 0)",
      white: "#FFFFFF",
      red: "#D73C3C",
      grey: {
        500: "#86A2A5",
        900: "#2A4144",
      },
      green: {
        200: "#E0F1E8",
        600: "#0C7D69",
      },
    },
    fontFamily: {
      sans: ["Karla", "sans-serif"],
    },
    fontWeight: {
      regular: "400",
      bold: "700",
    },
    fontSize: {
      heading: [
        "2rem",
        {
          lineHeight: 1,
          letterSpacing: "-0.03125em",
          fontWeight: "700",
        },
      ],
      "body-md": [
        "1.125rem",
        {
          lineHeight: 1.5,
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      "body-sm": [
        "1rem",
        {
          lineHeight: 1.5,
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
    },
    spacing: {
      100: "0.5rem",
      150: "0.75rem",
      200: "1rem",
      300: "1.5rem",
      400: "2rem",
      500: "2.5rem",
      1600: "8rem",
    },
  },
};
