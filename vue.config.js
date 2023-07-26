const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:
    process.env.NODE_ENV === "production"
      ? "https://chanchala-amar.github.io/newsletter-sign-up/"
      : "/",
});
