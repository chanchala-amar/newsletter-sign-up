<template>
  <news-letter-sign-up />
</template>

<script>
import NewsLetterSignUp from "./components/NewsLetterSignUp.vue";

export default {
  name: "App",
  components: {
    NewsLetterSignUp,
  },
};
</script>

<style>
@font-face {
  font-family: "Roboto";
  src: url("@/assets/fonts/Roboto-Bold.ttf");
  font-style: normal;
  font-weight: 700;
}
@font-face {
  font-family: "Roboto";
  src: url("@/assets/fonts/Roboto-Regular.ttf");
  font-style: normal;
  font-weight: 400;
}
:root {
  --dark-slate-grey: hsl(234, 29%, 20%);
  --charcoal-grey: hsl(235, 18%, 26%);
  --grey: hsl(231, 7%, 60%);
  --white: hsl(0, 0%, 100%);
  --tomato: hsl(4, 100%, 67%);
}

body {
  margin: 0px;
  background-color: var(--charcoal-grey);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
