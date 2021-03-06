// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

//  import tailwindcss
const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: 'Toyota Service Jayapura',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ],
      },
    },
  },
  plugins: [{
    use: "gridsome-plugin-tailwindcss",

    // these options are optional, as they are copies of the default values...
    options: {
      tailwindConfig: './tailwind.config.js',
      presetEnvConfig: {},
      shouldImport: false,
      shouldTimeTravel: false
    }
  }, ]
}