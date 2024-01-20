<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5"
    >
      Home
    </router-link>
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100"
      >
        Buscar
      </router-link>
      <router-link
        :to="{ name: 'Ingredients' }"
        class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100"
      >
        Buscar por ingrediente
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100"
      >
        Buscar por letra
      </router-link>
    </div>
  </header>
</template>
