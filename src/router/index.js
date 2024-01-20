import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/DefaultLayout.vue'
import Home from '../views/Home.vue'
import SearchByIngredient from '../views/SearchByIngredient.vue'
import SearchByName from '../views/SearchByName.vue'
import SearchByLetter from '../views/SearchByLetter.vue'
import GuestLayout from '../components/GuestLayout.vue'
import mealDetails from '../views/mealDetails.vue'
import Ingredients from '../views/Ingredients.vue'

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/buscarPorLetra/:letter?",
        name: "byLetter",
        component: SearchByLetter,
      },
      {
        path: "/buscarPorNombre/:name?",
        name: "byName",
        component: SearchByName,
      },
      {
        path: "/buscarPorIngrediente/:ingredient?",
        name: "byIngredient",
        component: SearchByIngredient,
      },
      {
        path: "/ingredientes",
        name: "Ingredients",
        component: Ingredients
      }
    ],
  },
  {
    path: "/invitado",
    component: GuestLayout
  },
  {
    path: "/meal/:id",
    name: "mealDetails",
    component: mealDetails    
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
