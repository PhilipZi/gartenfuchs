<template>
  <div class="container mx-auto px-4 py-8">
    <div class="mb-8">
      <NuxtLink
        to="/projekte"
        class="text-gf_green hover:text-gf_yellow flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Zurück zu allen Projekten
      </NuxtLink>
    </div>

    <h1 class="text-4xl font-bold mb-6 text-gf_green">
      Moderne Familienterrasse
    </h1>

    <!-- Hero Image -->
    <div class="relative h-96 mb-12 rounded-lg overflow-hidden shadow-xl">
      <img
        src="https://images.pexels.com/photos/4947277/pexels-photo-4947277.jpeg?auto=compress&cs=tinysrgb&w=1800"
        alt="Moderne Familienterrasse"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6"
      >
        <div class="flex flex-wrap gap-2 mb-2">
          <span
            class="bg-gf_yellow text-gf_green px-3 py-1 rounded-full text-sm font-semibold"
          >
            Terrassengestaltung
          </span>
          <span class="bg-white text-gray-800 px-3 py-1 rounded-full text-sm">
            Wolfenbüttel
          </span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <!-- Project Info -->
      <div class="lg:col-span-2">
        <h2 class="text-2xl font-bold mb-4 text-gf_green">
          Projektbeschreibung
        </h2>
        <p class="mb-4">
          Dieses Projekt umfasste die komplette Neugestaltung einer 40m² großen
          Terrasse für eine Familie mit Kindern. Der Fokus lag auf der Schaffung
          eines multifunktionalen Außenbereichs, der sowohl zum Kochen und Essen
          als auch zum Entspannen und Spielen genutzt werden kann.
        </p>
        <p class="mb-4">
          Die Familie wünschte sich einen Bereich, der das ganze Jahr über
          nutzbar ist und eine nahtlose Verbindung zwischen Innen- und
          Außenbereich schafft. Besonders wichtig waren hochwertige,
          pflegeleichte Materialien, die auch intensiver Nutzung standhalten.
        </p>
        <p class="mb-8">
          Die Kombination aus einem robusten Holzdeck, einer integrierten
          Outdoor-Küche und einem gemütlichen Lounge-Bereich erfüllt alle
          Anforderungen und bietet vielseitige Nutzungsmöglichkeiten für die
          gesamte Familie.
        </p>

        <h2 class="text-2xl font-bold mb-4 text-gf_green">Umsetzung</h2>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">1. Planung & Beratung</h3>
          <p>
            Nach einem ausführlichen Beratungsgespräch mit der Familie haben wir
            einen maßgeschneiderten Entwurf entwickelt, der alle funktionalen
            Anforderungen erfüllt und gleichzeitig ästhetisch ansprechend ist.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">2. Untergrundvorbereitung</h3>
          <p>
            Die vorhandene Terrasse wurde komplett entfernt und der Untergrund
            fachgerecht für die neue Konstruktion vorbereitet, inklusive der
            notwendigen Entwässerung und Elektroinstallationen.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">3. Holzdeckbau</h3>
          <p>
            Wir haben ein hochwertiges, wetterbeständiges Holzdeck aus thermisch
            behandelter Kiefer installiert, das sowohl ästhetisch ansprechend
            als auch langlebig ist und barfuß angenehm zu begehen ist.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">4. Outdoor-Küche</h3>
          <p>
            Die maßgefertigte Outdoor-Küche wurde mit einem Gasgrill, einer
            Spüle und ausreichend Arbeitsfläche ausgestattet. Wetterfeste
            Materialien und durchdachte Details ermöglichen das Kochen im Freien
            zu jeder Jahreszeit.
          </p>
        </div>
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-2">
            5. Loungebereich & Bepflanzung
          </h3>
          <p>
            Ein gemütlicher Loungebereich mit wetterfesten Polstermöbeln lädt
            zum Entspannen ein. Die umgebende Bepflanzung in großzügigen
            Pflanzgefäßen schafft eine grüne Oase und bietet gleichzeitig
            Sichtschutz.
          </p>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="lg:col-span-1">
        <div class="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
          <h2 class="text-xl font-bold mb-4 text-gf_green">Projektdetails</h2>

          <div class="mb-4">
            <h3 class="font-semibold mb-1">Terrassengröße</h3>
            <p>40 m²</p>
          </div>

          <div class="mb-4">
            <h3 class="font-semibold mb-1">Projektzeitraum</h3>
            <p>März - April 2023</p>
          </div>

          <div class="mb-4">
            <h3 class="font-semibold mb-1">Leistungen</h3>
            <ul class="list-disc list-inside">
              <li>Terrassenplanung</li>
              <li>Holzdeckbau</li>
              <li>Outdoor-Küche (Einbau)</li>
              <li>Elektroinstallation</li>
              <li>Wasseranschlüsse</li>
              <li>Terrassen-Bepflanzung</li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold mb-1">Besonderheiten</h3>
            <ul class="list-disc list-inside">
              <li>Thermisch behandeltes Holz</li>
              <li>Maßgefertigte Outdoor-Küche</li>
              <li>Integrierte Beleuchtung</li>
              <li>Kinderfreundliche Gestaltung</li>
            </ul>
          </div>
        </div>

        <div class="bg-gf_green text-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-bold mb-4">Kundenstimme</h2>
          <p class="italic mb-4">
            "Unsere neue Terrasse ist der absolute Traum! Die Outdoor-Küche
            nutzen wir fast täglich und die Kinder lieben es, draußen zu spielen
            während wir kochen. Das Team von Gartenfuchs hat perfekt verstanden,
            was wir brauchen und alles professionell umgesetzt."
          </p>
          <div class="font-semibold">Familie Schneider, Wolfenbüttel</div>
        </div>
      </div>
    </div>

    <!-- Image Gallery -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold mb-6 text-gf_green">
        Weitere Impressionen
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="h-64 rounded-lg overflow-hidden shadow-md">
          <img
            src="https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=1000"
            alt="Holzdeck der Terrasse"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="h-64 rounded-lg overflow-hidden shadow-md">
          <img
            src="https://images.pexels.com/photos/6957647/pexels-photo-6957647.jpeg?auto=compress&cs=tinysrgb&w=1000"
            alt="Outdoor-Küche"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="h-64 rounded-lg overflow-hidden shadow-md">
          <img
            src="https://images.pexels.com/photos/4577406/pexels-photo-4577406.jpeg?auto=compress&cs=tinysrgb&w=1000"
            alt="Loungebereich der Terrasse"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-gray-50 p-8 rounded-lg shadow-md mt-12">
      <h2 class="text-2xl font-bold mb-4 text-center text-gf_green">
        Von einer eigenen Traumterrasse träumen?
      </h2>
      <p class="text-center mb-6">
        Kontaktieren Sie uns für eine kostenlose Beratung und lassen Sie Ihren
        Außenbereich neu gestalten.
      </p>
      <div class="flex justify-center">
        <NuxtLink
          to="/kontakt"
          class="btn btn-primary bg-gf_yellow text-gf_green hover:bg-gf_green hover:text-white border-0 px-6 py-3"
        >
          Jetzt Beratungstermin vereinbaren
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Gartenfuchs - Moderne Familienterrasse Projekt",
  meta: [
    {
      name: "description",
      content:
        "Entdecken Sie unser Projekt 'Moderne Familienterrasse' - Neugestaltung einer 40m² großen Terrasse mit Holzdeck, Outdoor-Küche und Lounge-Bereich.",
    },
  ],
});
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
