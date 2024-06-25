<template>
  <div class="bg-white relative">
    <header class="p-4 md:p-16 relative">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl md:text-3xl font-bold">Gartenfuchs</h1>
      </div>
      <!-- Wrapper for the black and green divs on desktops -->
      <div
        class="hidden md:flex absolute -bottom-8 z-10 left-0 right-0 justify-between container mx-auto"
      >
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
        <div class="w-1/5 p-5 bg-gf_green flex items-center gap-2 text-white">
          <a href="tel:05341 54545454" class="flex items-center space-x-2">
            <SvgIcon iconType="call" viewBox="0 0 100 100" />
            <span>05341 / 347 384 4</span>
          </a>
        </div>
      </div>
      <!-- Wrapper for the black and green divs on mobile -->
      <div class="md:hidden flex flex-col items-center mt-4">
        <!-- green div -->
        <div
          class="w-full p-3 bg-gf_green flex items-center justify-center text-white"
        >
          <a href="tel:05341 54545454" class="flex items-center space-x-2">
            <SvgIcon iconType="call" viewBox="0 0 100 100" />
            <span>05341 / 347 384 4</span>
          </a>
        </div>
        <!-- black navigation -->
        <div class="w-full bg-dark p-5 mt-4">
          <nav>
            <ul class="flex flex-col items-center space-y-4 text-white">
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li><NuxtLink to="/impressum">Über uns</NuxtLink></li>
              <li><NuxtLink to="/kontakt">Dienstleistungen</NuxtLink></li>
              <li><NuxtLink to="/datenschutz">Bilder</NuxtLink></li>
              <li><NuxtLink to="/projekte">Kontakt</NuxtLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>
