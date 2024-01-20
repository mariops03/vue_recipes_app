<template>
    <div>
      <div v-if="meals.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-5 p-6">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
      </div>
      <div v-else class="flex justify-center text-gray-500">
        <p class="p-1">Nothing to show</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import MealItem from "./MealItem.vue";
  
  const { meals } = defineProps({
    meals: {
      type: Array,
      required: true,
    },
  });
  </script>
  