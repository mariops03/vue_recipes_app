<template>
  <div class="w-[800px] mx-auto">
    <h1 class="p-4 text-5xl font-bold mb-5 text-center">{{ meal.strMeal }}</h1>

    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="w-full h-96 object-cover"
    />
    <div class="grid grid-cols-1 md:grid-cols-3 p-8">
      <div>
        <strong>Category:</strong> {{ meal.strCategory }}
      </div>
      <div><strong>Origin:</strong> {{ meal.strArea }}</div>
      <div>
        <template v-if="meal.strTags">
          <strong>Tags:</strong> {{ meal.strTags }}
        </template>
      </div>
    </div>

    <div class="px-8">
      <h2 class="text-2x1 font-semibold mb-3">Instructions</h2>
      <p>{{ meal.strInstructions }}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 p-8">
      <div>
        <h2 class="text-2x1 font-semibold mb-3">Ingredients</h2>
        <ul>
          <template v-for="i in 20" :key="i">
            <li v-if="meal[`strIngredient${i}`]">
              {{ meal[`strIngredient${i}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2x1 font-semibold mb-3">Measurements</h2>
        <template v-for="i in 20" :key="i">
          <li v-if="meal[`strIngredient${i}`]">
            {{ meal[`strMeasure${i}`] }}
          </li>
        </template>
      </div>
      <div class="flex">
      <div class="mt-6">
        <YoutubeButton :href="meal.strYoutube" />
      </div>
      <div class="mt-6">
        <a
          v-if="meal.strSource"
          :href="meal.strSource"
          target="_blank"
          :class="{ 'ml-8': meal.strYoutube }"
          class="p-2 rounded border hover:border-yellow-500 hover:bg-white hover:text-yellow-500 bg-yellow-500 text-white transition-colors"
        >Original source</a>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YoutubeButton from "../components/YoutubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`/lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>