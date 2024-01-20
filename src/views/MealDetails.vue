<template>
  <div class="w-[800px] mx-auto">
    <h1 class="text-5xl font-bold mb-5 text-center">{{ meal.strMeal }}</h1>

    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="w-full h-96 object-cover"
    />
    <div class="grid grid-cols-1 md:grid-cols-3 p-8">
      <div>
        <strong>Category:</strong> {{ meal.strCategory }}
      </div>
      <div><strong>Area:</strong> {{ meal.strArea }}</div>
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
      <div class="mt-6">
        <YoutubeButton :href="meal.strYoutube" />
        <a
          :href="meal.strSource"
          target="_blank"
          class="ml-8 p-2 rounded border border-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors"
          >Original source
        </a>
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
