<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask" @click="$emit('close')">
      <div class="modal-container">
        <img
          src="@/assets/icon-list.svg"
          class="list-icon"
          alt="red-circle-arrow"
        />

        <div class="sign-up-heading">Thanks for subscribing!</div>
        <p>
          A confirmation email has been sent to <strong>{{ email }}</strong
          >. Please open it and click the button inside to confirm your
          subscription.
        </p>

        <button class="subscribe-button" @click="$emit('close')">
          Dismiss message
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({ show: Boolean, email: String });
</script>
<style scoped>
.list-icon {
  margin: 1rem;
  padding: 1rem;
  height: 4rem;
  width: 4rem;
  align-self: flex-start;
}
.modal-mask {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--charcoal-grey);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}
.modal-container {
  background-color: var(--white);
  height: 100vh;
  padding: 1rem 2rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

button {
  width: 70%;
}

@media screen and (min-width: 400px) {
  .modal-container {
    height: 60%;
    width: 30%;
  }
}
</style>
