<template>
  <main class="container">
    <img
      class="sign-up-image-mobile"
      alt="newsletter signup image"
      src="@/assets/illustration-sign-up-mobile.svg"
    />
    <img
      class="sign-up-image-desktop"
      alt="newsletter signup image"
      src="@/assets/illustration-sign-up-desktop.svg"
    />
    <article class="sign-up-container">
      <div class="sign-up-action">
        <h1 class="sign-up-heading">Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <p>
          <img
            src="@/assets/icon-list.svg"
            class="list-icon"
            alt="red-circle-arrow"
          />Product discovery and building what matters
        </p>
        <p>
          <img
            src="@/assets/icon-list.svg"
            class="list-icon"
            alt="red-circle-arrow"
          />Measuring to ensure updates were a success
        </p>
        <p>
          <img
            src="@/assets/icon-list.svg"
            class="list-icon"
            alt="red-circle-arrow"
          />And much more
        </p>

        <form name="subscribeform" @submit.prevent="submitEmail">
          <div class="label-error-space">
            <label for="email"> Email address</label
            ><span v-if="errorMessage.length > 0" class="error-message">{{
              errorMessage
            }}</span>
          </div>
          <input
            type="text"
            name="email"
            placeholder="email@company.com"
            v-model="email"
            :class="{ error: errorMessage.length > 0 }"
          />
          <button class="subscribe-button">
            Subscribe to monthly newsletter
          </button>
        </form>
        <Teleport to="body">
          <confirmation-modal
            :show="showModal"
            :email="email"
            @close="showModal = false"
          ></confirmation-modal>
        </Teleport>
      </div>
    </article>
  </main>
</template>

<script setup>
import ConfirmationModal from "./ConfirmationModal.vue";
import { ref } from "vue";

const showModal = ref(false);
const email = ref("");
const errorMessage = ref("");
var validEmailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function submitEmail() {
  errorMessage.value = "";
  if (email.value.match(validEmailRegex)) {
    showModal.value = true;
  } else {
    errorMessage.value = "Valid email required";
    //document.subscribeform.email.focus();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container {
  max-width: 1440px;
  display: grid;
  grid-template-rows: 1fr 2fr;
  background-color: var(--white);
  border-radius: 2%;
}
.sign-up-image-mobile {
  width: 100%;
  height: 100%;
  margin: 0;
}
.sign-up-image-desktop {
  display: none;
}
.sign-up-heading {
  font-size: 2.5rem;
  color: var(--dark-slate-grey);
}
.sign-up-container {
  padding: 0.5rem 1.5rem;
  text-align: left;
}
.list-icon {
  padding-right: 0.5rem;
}
p {
  font-weight: 100;
  text-align: left;
}

p:last-of-type {
  margin-bottom: 3rem;
}
input[type="text"] {
  box-sizing: border-box;
  width: 100%;
  border: 1px solid var(--grey);
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  margin-left: 0px;
  color: var(--grey);
}
button:hover {
  background-color: hsl(4, 100%, 67%);
  box-shadow: 10px 10px 5px 5px hsl(4, 100%, 67%, 0.09);
}
.subscribe-button {
  width: 100%;
  border-radius: 10px;
  background-color: var(--dark-slate-grey);
  color: var(--white);
  padding: 1rem;
  border: none;
  font-weight: bold;
}
.error-message {
  color: var(--tomato);
}
input:focus {
  outline: none;
  background-color: aliceblue;
}
.error {
  background-color: hsl(4, 100%, 67%, 10%);
  border: 1px solid hsl(4, 100%, 67%, 80%) !important;
}
.label-error-space {
  display: flex;
  justify-content: space-between;
}

@media screen and (min-width: 400px) {
  .container {
    grid-template-columns: 3fr 2fr;
    grid-template-rows: none;
    padding: 1.5rem;
  }
  .sign-up-image-desktop {
    grid-column-start: -2;
    grid-row-start: 1;
    display: block;
  }
  .sign-up-image-mobile {
    display: none;
  }
  .sign-up-container {
    grid-column-start: 1;
    grid-row-start: 1;
    padding: 2rem 2rem 1rem 5rem;
  }
  .sign-up-heading {
    font-size: 3.5rem;
  }
}
</style>
