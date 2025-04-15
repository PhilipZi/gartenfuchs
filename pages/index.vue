<template>
  <div class="overflow-hidden">
    <!-- Hero Section -->
    <div class="hero min-h-[70vh] w-full relative">
      <img
        src="https://picsum.photos/id/1015/1920/1080"
        alt="Gartenfuchs Gartenpflege"
        class="w-full h-full object-cover"
      />
      <div class="hero-overlay bg-opacity-60 bg-gf_green"></div>
      <div class="hero-content text-center text-white">
        <div class="max-w-3xl">
          <h1 class="mb-6 text-5xl font-bold">Ihr Garten in besten Händen</h1>
          <p class="mb-8 text-xl">
            Professionelle Gartenpflege und Landschaftsgestaltung in
            Braunschweig
          </p>
          <NuxtLink
            to="/kontakt"
            class="btn btn-primary bg-gf_yellow text-gf_green hover:bg-gf_green hover:text-white border-0"
          >
            Kostenlose Beratung anfordern
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Services Section -->
    <div class="container mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold text-center mb-12 text-gf_green">
        Unsere Dienstleistungen
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="card bg-base-100 shadow-xl">
          <figure class="px-4 pt-4">
            <img
              src="https://picsum.photos/id/1016/800/600"
              alt="Gartenpflege"
              class="rounded-xl h-48 w-full object-cover"
            />
          </figure>
          <div class="card-body">
            <h3 class="card-title text-gf_green">Regelmäßige Gartenpflege</h3>
            <p>
              Professionelle Pflege Ihres Gartens mit jahrelanger Erfahrung und
              modernster Ausrüstung.
            </p>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <figure class="px-4 pt-4">
            <img
              src="https://picsum.photos/id/1018/800/600"
              alt="Gartengestaltung"
              class="rounded-xl h-48 w-full object-cover"
            />
          </figure>
          <div class="card-body">
            <h3 class="card-title text-gf_green">Gartengestaltung</h3>
            <p>
              Individuelle Planung und Umsetzung Ihres Traumgartens nach Ihren
              Wünschen.
            </p>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <figure class="px-4 pt-4">
            <img
              src="https://picsum.photos/id/1019/800/600"
              alt="Saisonale Pflege"
              class="rounded-xl h-48 w-full object-cover"
            />
          </figure>
          <div class="card-body">
            <h3 class="card-title text-gf_green">Saisonale Pflege</h3>
            <p>
              Spezialisierte Pflege für jede Jahreszeit, damit Ihr Garten immer
              in Topform ist.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <div class="bg-gray-50">
      <div class="container mx-auto px-4 py-16">
        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <div class="lg:w-1/2">
            <h2 class="text-3xl font-bold mb-6 text-gf_green">
              Willkommen bei
              <span class="text-gf_yellow">Gartenfuchs</span>
            </h2>
            <p class="mb-4">
              Seit vier Jahren steht Gartenfuchs für erstklassige Gartenpflege
              und Landschaftsgestaltung in Braunschweig. Wir sind stolz darauf,
              Ihre erste Wahl für alle Ihre Gartenbedürfnisse zu sein.
            </p>
            <p class="mb-4">
              Unser engagiertes Team von Fachleuten verwandelt Ihre Grünflächen
              in Oasen der Ruhe und Schönheit. Mit jahrelanger Erfahrung und
              einer tiefen Leidenschaft für Gartenarbeit garantieren wir Ihnen
              erstklassige Ergebnisse.
            </p>
            <p>
              Ob regelmäßige Gartenpflege, Neugestaltung oder spezielle Projekte
              – bei uns sind Sie in den besten Händen. Lassen Sie uns gemeinsam
              Ihre Gartenträume verwirklichen.
            </p>
          </div>
          <div class="lg:w-1/2">
            <img
              src="https://picsum.photos/id/1020/800/600"
              alt="Über Gartenfuchs"
              class="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonials Section -->
    <div class="container mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold text-center mb-12 text-gf_green">
        Was unsere Kunden sagen
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <p class="italic">
              "Gartenfuchs hat unseren Garten komplett neu gestaltet. Das
              Ergebnis ist atemberaubend! Sehr professionell und zuverlässig."
            </p>
            <div class="card-actions justify-end mt-4">
              <div class="text-gf_green font-semibold">- Familie Schmidt</div>
            </div>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <p class="italic">
              "Die regelmäßige Pflege durch Gartenfuchs ist einfach perfekt.
              Unser Garten sieht immer gepflegt aus, und das Team ist sehr
              freundlich."
            </p>
            <div class="card-actions justify-end mt-4">
              <div class="text-gf_green font-semibold">- Herr Müller</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-gf_green text-white">
      <div class="container mx-auto px-4 py-16 text-center">
        <h2 class="text-3xl font-bold mb-6">Bereit für Ihren Traumgarten?</h2>
        <p class="mb-8 text-xl">
          Kontaktieren Sie uns für eine kostenlose Beratung
        </p>
        <NuxtLink
          to="/kontakt"
          class="btn btn-primary bg-gf_yellow text-gf_green hover:bg-white hover:text-gf_green border-0"
        >
          Jetzt Kontakt aufnehmen
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Gartenfuchs - Professionelle Gartenpflege in Braunschweig",
  meta: [
    {
      name: "description",
      content:
        "Gartenfuchs bietet professionelle Gartenpflege und Landschaftsgestaltung in Braunschweig. Jetzt kostenlose Beratung anfordern!",
    },
  ],
});
</script>

<style scoped>
.hero {
  position: relative;
}
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.hero-content {
  position: relative;
  z-index: 1;
}
</style>
