<template>
  <div
    class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
  >
    <figure class="relative h-56 overflow-hidden">
      <img :src="image" :alt="title" class="w-full h-full object-cover" />
      <div
        class="absolute top-2 right-2 bg-gf_yellow text-gf_green px-3 py-1 rounded-full text-sm font-semibold"
      >
        {{ serviceType }}
      </div>
    </figure>
    <div class="card-body">
      <h2 class="card-title text-gf_green font-bold text-xl">{{ title }}</h2>
      <p class="text-gray-600 mb-4">{{ description }}</p>
      <div class="flex items-center text-sm text-gray-500 mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        {{ location }}
      </div>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="(tag, index) in tags"
          :key="index"
          class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
        >
          {{ tag }}
        </span>
      </div>
      <div class="card-actions justify-end mt-4">
        <span
          class="btn btn-sm bg-gf_green text-white hover:bg-gf_yellow hover:text-gf_green border-0"
        >
          Details ansehen
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
  location: String,
  serviceType: String,
  tags: {
    type: Array,
    default: () => [],
  },
  slug: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.card:hover img {
  transform: scale(1.05);
  transition: transform 0.5s ease;
}
</style>
