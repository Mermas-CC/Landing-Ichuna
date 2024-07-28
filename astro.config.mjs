import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Configuraciones de integración ya establecidas
  integrations: [tailwind()],
  // Puedes añadir más configuraciones aquí si es necesario
});
