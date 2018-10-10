module.exports = {
  env: {
    production: {
      presets: ["@vue/app"]
    },
    test: {
      presets: [["@vue/babel-preset-app", { modules: "commonjs" }]]
    },
    utils: {
      presets: ["@babel/preset-env"],
      plugins: [
        [
          "module-resolver",
          {
            root: ["skeleton-element"],
            alias: {
              "@": "skeleton-element/dist"
            }
          }
        ]
      ]
    }
  }
};
