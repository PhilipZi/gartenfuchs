<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-center mb-2 text-gf_green">
      Unsere Gartenprojekte
    </h1>
    <p class="text-xl text-gray-600 text-center mb-8">
      Entdecken Sie unsere erfolgreich umgesetzten Gartenprojekte
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[70px]">
      <NuxtLink to="/projekte/naturoase" class="no-underline text-inherit">
        <ProjectCard
          title="Naturoase im Stadtgarten"
          description="Verwandlung eines 120m² Stadtgartens in einen naturnahen Rückzugsort mit heimischen Pflanzen, Gemüsebeet und Sitzbereich. Besonderes Highlight: der insektenfreundliche Staudengarten."
          image="https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1000"
          location="Braunschweig"
          serviceType="Komplettgestaltung"
          :tags="['Naturgarten', 'Heimische Pflanzen', 'Insektenfreundlich']"
          slug="naturoase"
        />
      </NuxtLink>
      <NuxtLink
        to="/projekte/familienterrasse"
        class="no-underline text-inherit"
      >
        <ProjectCard
          title="Moderne Familienterrasse"
          description="Neugestaltung einer 40m² großen Terrasse mit Holzdeck, Outdoor-Küche und Lounge-Bereich. Perfekt für Familien, die gerne draußen kochen und Zeit verbringen."
          image="https://images.pexels.com/photos/4947277/pexels-photo-4947277.jpeg?auto=compress&cs=tinysrgb&w=1000"
          location="Wolfenbüttel"
          serviceType="Terrassengestaltung"
          :tags="['Holzdeck', 'Outdoor-Küche', 'Lounge-Bereich']"
          slug="familienterrasse"
        />
      </NuxtLink>
      <NuxtLink
        to="/projekte/pflegeleichter-vorgarten"
        class="no-underline text-inherit"
      >
        <ProjectCard
          title="Pflegeleichter Vorgarten"
          description="Umgestaltung eines Vorgartens zu einer pflegeleichten und repräsentativen Visitenkarte des Hauses mit Ziergräsern, Bodendeckern und automatischer Bewässerung."
          image="https://images.pexels.com/photos/933188/pexels-photo-933188.jpeg?auto=compress&cs=tinysrgb&w=1000"
          location="Braunschweig"
          serviceType="Vorgarten"
          :tags="['Pflegeleicht', 'Automatische Bewässerung', 'Bodendecker']"
          slug="pflegeleichter-vorgarten"
        />
      </NuxtLink>
      <NuxtLink
        to="/projekte/hochbeete-bauerngarten"
        class="no-underline text-inherit"
      >
        <ProjectCard
          title="Bauerngarten mit Hochbeeten"
          description="Traditioneller Bauerngarten mit Hochbeeten für Gemüse und Kräuter, umrahmt von Staudenbeeten. Ideal für Selbstversorger mit Fokus auf Nützlingsbewohner und Biodiversität."
          image="https://images.pexels.com/photos/5490242/pexels-photo-5490242.jpeg?auto=compress&cs=tinysrgb&w=1000"
          location="Salzgitter"
          serviceType="Nutzgarten"
          :tags="['Hochbeete', 'Kräutergarten', 'Selbstversorgung']"
          slug="hochbeete-bauerngarten"
        />
      </NuxtLink>
      <NuxtLink to="/projekte/koi-teich" class="no-underline text-inherit">
        <ProjectCard
          title="Wassergarten mit Koi-Teich"
          description="Anlage eines 25m² großen Koi-Teichs mit natürlicher Filterzone, Bachlauf und Holzsteg. Inkl. technischer Ausstattung wie Pumpen, Filter und LED-Beleuchtung."
          image="https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=1000"
          location="Goslar"
          serviceType="Teichbau"
          :tags="['Koi-Teich', 'Bachlauf', 'Wassergarten']"
          slug="koi-teich"
        />
      </NuxtLink>
      <NuxtLink to="/projekte/seniorengarten" class="no-underline text-inherit">
        <ProjectCard
          title="Seniorengarten ohne Barrieren"
          description="Barrierefreie Gestaltung eines 200m² großen Gartens für ältere Menschen mit erhöhten Beeten, breiten Wegen und bequemen Sitzmöglichkeiten. Jahreszeiten-optimierte Bepflanzung."
          image="https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&w=1000"
          location="Wolfsburg"
          serviceType="Barrierefreier Garten"
          :tags="['Barrierefrei', 'Erhöhte Beete', 'Seniorengerecht']"
          slug="seniorengarten"
        />
      </NuxtLink>
      <NuxtLink
        to="/projekte/mediterrane-dachterrasse"
        class="no-underline text-inherit"
      >
        <ProjectCard
          title="Mediterrane Dachterrasse"
          description="Gestaltung einer 30m² großen Dachterrasse im mediterranen Stil mit Olivenbäumen, Lavendel und Kübelpflanzen. Automatische Bewässerung und Beschattungssystem."
          image="https://images.pexels.com/photos/7005019/pexels-photo-7005019.jpeg?auto=compress&cs=tinysrgb&w=1000"
          location="Braunschweig"
          serviceType="Dachterrasse"
          :tags="['Mediterran', 'Kübelpflanzen', 'Automatische Bewässerung']"
          slug="mediterrane-dachterrasse"
        />
      </NuxtLink>
      <NuxtLink to="/projekte/spielgarten" class="no-underline text-inherit">
        <ProjectCard
          title="Naturnaher Spielgarten"
          description="Kindgerechter Garten mit Naturmaterialien: Weidentipi, Baumstamm-Parcours, Sandspielbereich und essbaren Beerensträuchern. Sicherheit und Naturerlebnis in einem."
          image="https://images.pexels.com/photos/6294228/pexels-photo-6294228.jpeg?auto=compress&cs=tinysrgb&w=1000"
          location="Peine"
          serviceType="Spielgarten"
          :tags="['Kindgerecht', 'Naturmaterialien', 'Beerensträucher']"
          slug="spielgarten"
        />
      </NuxtLink>
      <NuxtLink
        to="/projekte/hanggarten-trockenmauer"
        class="no-underline text-inherit"
      >
        <ProjectCard
          title="Hanggarten mit Trockenmauer"
          description="Terrassierung eines 250m² großen Hanggrundstücks mit Naturstein-Trockenmauern, mediterraner Bepflanzung und integrierter Außentreppe. Optimale Hangbefestigung."
          image="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1000"
          location="Harz"
          serviceType="Hanggestaltung"
          :tags="['Trockenmauer', 'Naturstein', 'Hangbefestigung']"
          slug="hanggarten-trockenmauer"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Gartenfuchs - Unsere Gartenprojekte",
  meta: [
    {
      name: "description",
      content:
        "Entdecken Sie unsere erfolgreich umgesetzten Gartenprojekte - von Naturgärten über Wassergärten bis hin zu barrierefreien Gärten.",
    },
  ],
});
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
