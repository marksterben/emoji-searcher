const { dependencies } = require("./package.json");

module.exports = {
  name: "emoji",
  exposes: {
    "./emoji": "./src/App",
  },
  filename: "remoteEntry.js",
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
