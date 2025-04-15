<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <span class="text-2xl font-bold text-gf_green">Gartenfuchs</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink
            to="/"
            class="text-gray-700 hover:text-gf_green transition-colors"
            active-class="text-gf_green font-semibold"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/projekte"
            class="text-gray-700 hover:text-gf_green transition-colors"
            active-class="text-gf_green font-semibold"
          >
            Projekte
          </NuxtLink>
          <NuxtLink
            to="/kontakt"
            class="text-gray-700 hover:text-gf_green transition-colors"
            active-class="text-gf_green font-semibold"
          >
            Kontakt
          </NuxtLink>
          <NuxtLink
            to="/kontakt"
            class="btn bg-gf_yellow text-gf_green hover:bg-gf_green hover:text-white border-0"
          >
            Beratung anfordern
          </NuxtLink>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden text-gray-700"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isMenuOpen" class="md:hidden fixed inset-0 bg-white z-50">
        <div class="flex flex-col h-full">
          <div class="flex justify-between items-center p-4 border-b">
            <NuxtLink to="/" class="text-2xl font-bold text-gf_green">
              Gartenfuchs
            </NuxtLink>
            <button @click="isMenuOpen = false" class="text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav class="flex flex-col p-4 space-y-4">
            <NuxtLink
              to="/"
              class="text-gray-700 hover:text-gf_green transition-colors text-lg"
              @click="isMenuOpen = false"
              active-class="text-gf_green font-semibold"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/projekte"
              class="text-gray-700 hover:text-gf_green transition-colors text-lg"
              @click="isMenuOpen = false"
              active-class="text-gf_green font-semibold"
            >
              Projekte
            </NuxtLink>
            <NuxtLink
              to="/kontakt"
              class="text-gray-700 hover:text-gf_green transition-colors text-lg"
              @click="isMenuOpen = false"
              active-class="text-gf_green font-semibold"
            >
              Kontakt
            </NuxtLink>
            <NuxtLink
              to="/kontakt"
              class="btn bg-gf_yellow text-gf_green hover:bg-gf_green hover:text-white border-0 w-full"
              @click="isMenuOpen = false"
            >
              Beratung anfordern
            </NuxtLink>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
</script>

<style scoped>
.router-link-active {
  @apply text-gf_green font-semibold;
}
</style>
