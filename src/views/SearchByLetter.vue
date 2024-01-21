<template>
  <div>
    <div class="flex flex-wrap gap-1 justify-center mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        class="px-4 py-2 flex-wrap flex bg-gray-300 rounded-full text-gray-800 hover:bg-yellow-500 hover:text-white transition-colors"
      >
        {{ letter }}
      </router-link>
    </div>
    <Meals :meals="comidas"/>
  </div>
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
