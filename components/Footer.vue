<template>
  <footer class="bg-gf_green text-white">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Copyright Section -->
        <div class="text-center md:text-left">
          <p class="text-lg font-semibold mb-2">Gartenfuchs</p>
          <p>&copy; 2023 Gartenfuchs. Alle Rechte vorbehalten.</p>
        </div>

        <!-- Quick Links -->
        <div class="text-center">
          <p class="text-lg font-semibold mb-2">Quick Links</p>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="hover:text-gf_yellow transition-colors">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/projekte"
                class="hover:text-gf_yellow transition-colors"
              >
                Projekte
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/kontakt"
                class="hover:text-gf_yellow transition-colors"
              >
                Kontakt
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Legal Links -->
        <div class="text-center md:text-right">
          <p class="text-lg font-semibold mb-2">Rechtliches</p>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/impressum"
                class="hover:text-gf_yellow transition-colors"
              >
                Impressum
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/datenschutz"
                class="hover:text-gf_yellow transition-colors"
              >
                Datenschutz
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
footer {
  margin-top: auto;
}
</style>
