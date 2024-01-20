<template>
    <div class="flex gap-2 justify-center mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
    <Meals :meals="comidas"/>
</template>

<script setup>

import Meals from "../components/Meals.vue";
import { useRoute } from 'vue-router';
import { onMounted, computed, watch } from 'vue';
import store from "../store";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const route = useRoute();
const comidas = computed(() => store.state.comidasPorLetra);

watch(route, () => {
  store.dispatch('buscarPorLetra', route.params.letter);
});

onMounted(() => {
  store.dispatch('buscarPorLetra', route.params.letter);
});

</script>
