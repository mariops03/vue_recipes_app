<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray200 w-full"
      placeholder="Introduce el nombre de una comida"
      @change="buscar"
    />
  </div>
  <Meals :meals="comidas"/>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";

const keyword = ref("");
const comidas = computed(() => store.state.comidasBuscadas);
const route = useRoute();

function buscar() {
  if(keyword.value) {
    store.dispatch("buscar", keyword.value);
  }else{
    store.commit("setBuscar", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) buscar();
});
</script>
