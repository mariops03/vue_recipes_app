<template>
  <div class="bg-white shadow rounded hover:scale-105 transition-all">
    <router-link
      :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
      class="block"
    >
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded w-full h-48 object-cover"
      />
    </router-link>
    <h3 class="px-4 mt-2 font-bold">{{ meal.strMeal }}</h3>
    <p v-if="meal.strCategory" class="mb-4 px-4">{{ meal.strCategory }}</p>
    <div class="px-4 mb-4 flex items-center justify-between">
      <YoutubeButton :href="meal.strYoutube"/>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";
const { meal } = defineProps({
  meal: {
    type: Object,
    required: true,
  },
});
</script>
