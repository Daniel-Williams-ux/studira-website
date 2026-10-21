import { bindings, defineConfig, defineWorker } from "cf/config";

const formspreeContactEndpoint =
  process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT ?? "";

export default defineConfig({
  worker: defineWorker({
    name: "studira-website",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-10-20",
    compatibilityFlags: ["nodejs_compat"],
    assets: {
      htmlHandling: "none",
      notFoundHandling: "none",
      runWorkerFirst: ["/*", "!/_next/static/*", "!/*/_next/static/*"],
    },
    domains: ["studirasystems.com", "www.studirasystems.com"],
    workersDev: true,
    previewUrls: true,
    env: {
      ASSETS: bindings.assets(),
      IMAGES: bindings.images(),
      ...(formspreeContactEndpoint
        ? {
            NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT: bindings.text(
              formspreeContactEndpoint,
            ),
          }
        : {}),
    },
  }),
});
