<template>

<Meals :meals="comidas"/>
</template>

<script setup>
import { onMounted, computed } from "vue";
import Meals from "../components/Meals.vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();
const comidas = computed(() => store.state.comidasPorIngrediente);

onMounted(() => {
  store.dispatch("buscarPorIngrediente", route.params.ingredient);
});


</script>
