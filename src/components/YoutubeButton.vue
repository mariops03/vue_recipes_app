<template>
  <div>
    <a
      v-if="href"
      :href="href"
      target="_blank"
      class="p-2 rounded border hover:border-yellow-500 hover:bg-white hover:text-yellow-500 bg-yellow-500 text-white transition-colors"
    >
      Video recipe
    </a>
  </div>
</template>

<script setup>
const { href } = defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>
