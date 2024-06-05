import { defineConfig } from "vite";

export default defineConfig({
  base: "/fem-contact-form/",
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
