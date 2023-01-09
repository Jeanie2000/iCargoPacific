<script setup>
</script>

<template>
  <RouterView />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

html::-webkit-scroller {
  width: 1rem;
}

html::-webkit-scroller-track {
  background-color: var(--color-white);
}

html::-webkit-scroller-thumb {
  background-color: var(--color-primary);
}

section {
  padding: 5rem 10%;
}
@keyframes fadeIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
}
</style>
