<template>
    <h1 class="text-4xl font-bold p-6">Interesting recipes</h1>
    <Meals :meals="comidas"/>
</template>

<script setup>
    import { onMounted, ref } from "vue";
    import axiosClient from "../axiosClient";
    import Meals from "../components/Meals.vue";
    const comidas = ref([]);

    onMounted(()=>{
        for(let i = 0; i < 10; i++){
            axiosClient.get('/random.php').then(({data})=>{
                comidas.value.push(data.meals[0]);
            })
        }
    });
</script>
