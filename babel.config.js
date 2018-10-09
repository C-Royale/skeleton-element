module.exports = {
  presets: ["@vue/app"],
  env: {
    utils: {
      plugins: [
        [
          "module-resolver",
          {
            root: ["skeleton-element"],
            alias: {
              "@src": "skeleton-element/dist"
            }
          }
        ]
      ]
    }
  }
};
