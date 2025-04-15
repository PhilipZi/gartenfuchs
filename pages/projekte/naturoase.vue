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
      Naturoase im Stadtgarten
    </h1>

    <!-- Hero Image -->
    <div class="relative h-96 mb-12 rounded-lg overflow-hidden shadow-xl">
      <img
        src="https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1800"
        alt="Naturoase im Stadtgarten"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6"
      >
        <div class="flex flex-wrap gap-2 mb-2">
          <span
            class="bg-gf_yellow text-gf_green px-3 py-1 rounded-full text-sm font-semibold"
          >
            Komplettgestaltung
          </span>
          <span class="bg-white text-gray-800 px-3 py-1 rounded-full text-sm">
            Braunschweig
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
          Bei diesem Projekt haben wir einen 120m² großen Stadtgarten in eine
          naturnahe Ruheoase verwandelt. Der Fokus lag auf heimischen Pflanzen,
          Insektenfreundlichkeit und einem harmonischen Gesamtbild, das den
          Garten zu einem erweiterten Wohnraum macht.
        </p>
        <p class="mb-4">
          Besonders wichtig war dem Kunden eine pflegeleichte Gestaltung, die
          dennoch das ganze Jahr über attraktiv aussieht. Durch eine durchdachte
          Pflanzenwahl konnten wir sicherstellen, dass in jeder Jahreszeit etwas
          blüht oder durch Struktur und Farbe ein Highlight darstellt.
        </p>
        <p class="mb-8">
          Der integrierte Gemüse- und Kräuterbereich ermöglicht es den
          Bewohnern, eigenes Gemüse anzubauen, während der gemütliche
          Sitzbereich mit Natursteinpflasterung zum Verweilen einlädt.
        </p>

        <h2 class="text-2xl font-bold mb-4 text-gf_green">Umsetzung</h2>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">1. Planung & Beratung</h3>
          <p>
            Nach einer ausführlichen Beratung vor Ort haben wir einen
            detaillierten Gestaltungsplan entwickelt, der die Wünsche der Kunden
            berücksichtigt und gleichzeitig die Standortbedingungen optimal
            nutzt.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">2. Bodenvorbereitung</h3>
          <p>
            Der Boden wurde gründlich gelockert und mit hochwertigem Kompost
            angereichert, um ideale Wachstumsbedingungen für die Pflanzen zu
            schaffen.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">3. Strukturelemente</h3>
          <p>
            Die Wege wurden mit wasserdurchlässigem Natursteinpflaster angelegt.
            Im hinteren Bereich entstand ein Sitzplatz aus Holzdielen, der sich
            harmonisch in die Umgebung einfügt.
          </p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">4. Bepflanzung</h3>
          <p>
            Wir haben ausschließlich heimische, standortgerechte Pflanzen
            verwendet, die nach ökologischen Gesichtspunkten ausgewählt wurden.
            Besonderes Augenmerk lag auf Insekten- und Vogelfreundlichkeit.
          </p>
        </div>
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-2">5. Bewässerungssystem</h3>
          <p>
            Ein automatisches Bewässerungssystem mit Regensensor wurde
            installiert, um Wassereinsparungen zu ermöglichen und die Pflanzen
            optimal zu versorgen.
          </p>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="lg:col-span-1">
        <div class="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
          <h2 class="text-xl font-bold mb-4 text-gf_green">Projektdetails</h2>

          <div class="mb-4">
            <h3 class="font-semibold mb-1">Grundstücksgröße</h3>
            <p>120 m²</p>
          </div>

          <div class="mb-4">
            <h3 class="font-semibold mb-1">Projektzeitraum</h3>
            <p>April - Juni 2023</p>
          </div>

          <div class="mb-4">
            <h3 class="font-semibold mb-1">Leistungen</h3>
            <ul class="list-disc list-inside">
              <li>Gartenplanung</li>
              <li>Erdarbeiten</li>
              <li>Wegebau</li>
              <li>Pflanzarbeiten</li>
              <li>Bewässerungssystem</li>
              <li>Beleuchtungskonzept</li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold mb-1">Besonderheiten</h3>
            <ul class="list-disc list-inside">
              <li>Heimische Pflanzen</li>
              <li>Insektenfreundliche Gestaltung</li>
              <li>Wassersparende Bewässerung</li>
              <li>Integriertes Gemüsebeet</li>
            </ul>
          </div>
        </div>

        <div class="bg-gf_green text-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-bold mb-4">Kundenstimme</h2>
          <p class="italic mb-4">
            "Das Team von Gartenfuchs hat unseren Garten völlig verwandelt. Wir
            verbringen jetzt viel mehr Zeit draußen und freuen uns über die
            vielen Insekten und Vögel, die unser kleines Paradies besuchen. Die
            Planung war professionell und alle unsere Wünsche wurden
            berücksichtigt."
          </p>
          <div class="font-semibold">Familie Berger, Braunschweig</div>
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
            src="https://images.pexels.com/photos/6231574/pexels-photo-6231574.jpeg?auto=compress&cs=tinysrgb&w=1000"
            alt="Naturgarten mit Stauden"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="h-64 rounded-lg overflow-hidden shadow-md">
          <img
            src="https://images.pexels.com/photos/5490242/pexels-photo-5490242.jpeg?auto=compress&cs=tinysrgb&w=1000"
            alt="Gemüsebeete im Naturgarten"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="h-64 rounded-lg overflow-hidden shadow-md">
          <img
            src="https://images.pexels.com/photos/4947406/pexels-photo-4947406.jpeg?auto=compress&cs=tinysrgb&w=1000"
            alt="Sitzplatz im Garten"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-gray-50 p-8 rounded-lg shadow-md mt-12">
      <h2 class="text-2xl font-bold mb-4 text-center text-gf_green">
        Auch von einer Naturoase träumen?
      </h2>
      <p class="text-center mb-6">
        Kontaktieren Sie uns für eine kostenlose Beratung und lassen Sie Ihren
        Traumgarten Wirklichkeit werden.
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
  title: "Gartenfuchs - Naturoase im Stadtgarten Projekt",
  meta: [
    {
      name: "description",
      content:
        "Entdecken Sie unser Projekt 'Naturoase im Stadtgarten' - Eine Verwandlung eines 120m² Stadtgartens in einen naturnahen Rückzugsort mit heimischen Pflanzen.",
    },
  ],
});
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
