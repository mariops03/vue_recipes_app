<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-2">Ingredients</h1>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray200 w-full mb-5 mt-3"
      placeholder="Introduce el nombre del ingrediente"
    />
    <div class="mb-5">
      <router-link
        :to="{
          name: 'byIngredient',
          params: { ingredient: ingredient.strIngredient },
        }"
        v-for="ingredient of filteredIngredients"
        :key="ingredient.idIngredient"
        class="block bg-gray-200 p-5 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 ease-in-out"
      >
        <h3 class="text-2x1 font-bold mb-2">{{ ingredient.strIngredient }}</h3>
        <p>{{ ingredient.strDescription }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

import axiosClient from "../axiosClient";

const ingredients = ref([]);
const keyword = ref("");
const filteredIngredients = computed(() => {
  if(!filteredIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
    );
});

onMounted(() => {
  axiosClient
    .get("/list.php?i=list")
    .then(({ data }) => (ingredients.value = data.meals));
});
</script>
