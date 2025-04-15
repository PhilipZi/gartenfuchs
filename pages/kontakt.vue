<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="relative h-[40vh] w-full">
      <img
        src="https://picsum.photos/id/1021/1920/1080"
        alt="Kontakt Gartenfuchs"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gf_green bg-opacity-60"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white text-center">
          Kontaktieren Sie uns
        </h1>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8">
          <div>
            <h2 class="text-3xl font-bold text-gf_green mb-6">
              So erreichen Sie uns
            </h2>
            <p class="text-gray-700 mb-8">
              Wir sind für Sie da! Kontaktieren Sie uns für eine kostenlose
              Beratung oder bei Fragen zu unseren Dienstleistungen.
            </p>
          </div>

          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="text-gf_yellow">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">Adresse</h3>
                <p class="text-gray-600">
                  Gartenfuchs GmbH
                  <br />
                  Musterstraße 123
                  <br />
                  38100 Braunschweig
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="text-gf_yellow">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">Telefon</h3>
                <p class="text-gray-600">
                  <a href="tel:+49123456789" class="hover:text-gf_green">
                    +49 123 456 789
                  </a>
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="text-gf_yellow">
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">E-Mail</h3>
                <p class="text-gray-600">
                  <a
                    href="mailto:info@gartenfuchs.de"
                    class="hover:text-gf_green"
                  >
                    info@gartenfuchs.de
                  </a>
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="text-gf_yellow">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">Öffnungszeiten</h3>
                <p class="text-gray-600">
                  Montag - Freitag: 8:00 - 18:00 Uhr
                  <br />
                  Samstag: 9:00 - 14:00 Uhr
                  <br />
                  Sonntag: Geschlossen
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h2 class="text-3xl font-bold text-gf_green mb-6">
            Schreiben Sie uns
          </h2>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gf_green focus:ring-gf_green"
                required
              />
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700"
              >
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gf_green focus:ring-gf_green"
                required
              />
            </div>

            <div>
              <label
                for="phone"
                class="block text-sm font-medium text-gray-700"
              >
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gf_green focus:ring-gf_green"
              />
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700"
              >
                Nachricht
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gf_green focus:ring-gf_green"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                class="w-full btn bg-gf_yellow text-gf_green hover:bg-gf_green hover:text-white border-0"
              >
                Nachricht senden
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Map Section -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-gf_green mb-6 text-center">
          So finden Sie uns
        </h2>
        <div class="h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.474766303857!2d10.5234163158037!3d52.2684629797905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47af8f8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sBraunschweig!5e0!3m2!1sde!2sde!4v1624567890123!5m2!1sde!2sde"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const handleSubmit = async () => {
  // Hier würde normalerweise die Logik zum Senden des Formulars stehen
  console.log("Form submitted:", form.value);
  // Reset form
  form.value = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
};

useHead({
  title: "Kontakt - Gartenfuchs",
  meta: [
    {
      name: "description",
      content:
        "Kontaktieren Sie Gartenfuchs für professionelle Gartenpflege in Braunschweig. Wir sind für Sie da!",
    },
  ],
});
</script>

<style scoped>
input,
textarea {
  @apply border-gray-300 focus:border-gf_green focus:ring-gf_green;
}
</style>
