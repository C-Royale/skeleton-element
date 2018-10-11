module.exports = {
  presets: ["@vue/app"],
  env: {
    utils: {
      presets: [
        ["@vue/babel-preset-app", { modules: "commonjs", useBuiltIns: false }]
      ],
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
