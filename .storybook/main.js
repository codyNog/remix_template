const path = require("path");

module.exports = {
  stories: ["../app/**/*.stories.mdx", "../app/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config) => {
    config.resolve.alias["~"] = path.join(__dirname, "../app/");
    return config;
  },
};
