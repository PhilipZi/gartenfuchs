<template>
  <div class="overflow-hidden mx-auto max-w-[1800px]">
    <div class="relative banner">
      <img
        src="https://picsum.photos/id/28/1800/500"
        alt="Banner"
        class="md:h-[500px] w-full object-cover"
      />
      <div class="absolute inset-0 bg-black opacity-25"></div>
      <div
        class="absolute z-10 inset-0 flex items-center justify-center text-white px-4"
      >
        <div class="text-center">
          <span
            class="block text-xl text-title_blue-500 sm:text-3xl md:text-4xl font-normal drop-shadow-2xl"
            >Willkommen beim Gartenfuchs</span
          >
          <span
            class="block text-2xl text-title_blue-500 sm:text-4xl md:text-5xl font-black drop-shadow-2xl"
            >Wir gestalten Ihren Garten</span
          >
          <div class="mt-10 space-x-10">
            <NuxtLink
              to="/kontakt"
              class="inline-block px-4 py-2 bg-gf_green text-white rounded-md shadow-md"
              >Jetzt Kontakt aufnehmen</NuxtLink
            >
            <NuxtLink
              to="/projekte"
              class="inline-block px-4 py-2 bg-white text-dark rounded-md shadow-md"
              >Unsere Projekte ansehen</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
