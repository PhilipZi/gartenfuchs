<template>
  <div class="bg-white relative">
    <header class="container p-16 relative">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold">Gartenfuchs</h1>
      </div>
      <!-- Wrapper for the black and green divs -->
      <div class="absolute -bottom-8 z-10 left-0 right-0 flex justify-between">
        <!-- black navigation -->
        <div class="w-4/5 flex items-center bg-dark p-5">
          <nav>
            <ul class="flex space-x-4 text-white">
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li><NuxtLink to="/impressum">Über uns</NuxtLink></li>
              <li><NuxtLink to="/kontakt">Dienstleistungen</NuxtLink></li>
              <li><NuxtLink to="/datenschutz">Bilder</NuxtLink></li>
              <li><NuxtLink to="/projekte">Kontakt</NuxtLink></li>
            </ul>
          </nav>
        </div>
        <!-- green div -->
        <div class="w-2/5 p-5 bg-gf_green flex items-center text-white">
          <a href="tel:05341 54545454">Tel: 05341 / 347 384 4</a>
        </div>
      </div>
    </header>
  </div>
</template>
